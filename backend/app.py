from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from random import choice
from backend.chatbot.llama_client import LlamaClient

from dotenv import load_dotenv

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')


load_dotenv()

app = Flask(__name__)
CORS(app) 

llama_client = LlamaClient(
    model_name="meta-llama/Meta-Llama-3-8B-Instruct",
    token=os.getenv("HUGGINGFACE_TOKEN")
)


def calculate_winner(board):
    lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for line in lines:
        a, b, c = line
        if board[a] and board[a] == board[b] and board[a] == board[c]:
            return board[a], line
    return None, None


def check_draw(board):
    return all(spot is not None for spot in board)


def find_best_move_easy(board):
    available_moves = [i for i, spot in enumerate(board) if spot is None]
    return choice(available_moves) if available_moves else None


def find_best_move_middle(board):
    available_moves = [i for i, spot in enumerate(board) if spot is None]
    for move in available_moves:
        board_copy = board[:]
        board_copy[move] = 'O'
        if calculate_winner(board_copy) == 'O':
            return move
    return choice(available_moves) if available_moves else None


def is_terminal(board):
    winner, _ = calculate_winner(board)
    return winner is not None or check_draw(board)


def evaluate(board):
    winner, _ = calculate_winner(board)
    if winner == 'O':
        return 1
    elif winner == 'X':
        return -1
    else:
        return 0


def minimax(board, is_maximizing):
    if is_terminal(board):
        return evaluate(board)

    if is_maximizing:
        best_score = -float('inf')
        for i in range(9):
            if board[i] is None:
                board[i] = 'O'
                score = minimax(board, False)
                board[i] = None
                best_score = max(best_score, score)
        return best_score
    else:
        best_score = float('inf')
        for i in range(9):
            if board[i] is None:
                board[i] = 'X'
                score = minimax(board, True)
                board[i] = None
                best_score = min(best_score, score)
        return best_score


def find_best_move_hard(board):
    best_score = -float('inf')
    best_move = None

    for i in range(9):
        if board[i] is None:
            board[i] = 'O'
            move_score = minimax(board, False)
            board[i] = None
            if move_score > best_score:
                best_score = move_score
                best_move = i

    return best_move


@app.route('/tictactoe/make_move/<difficulty>', methods=['POST'])
def make_move_with_difficulty(difficulty):
    data = request.json
    board = data.get('board')

    if not board:
        return jsonify({'error': 'No board provided'}), 400

    user_winner, win_line = calculate_winner(board)
    if user_winner:
        return jsonify({'winner': user_winner, 'win_line': win_line, 'move': None})

    if difficulty == 'easy':
        best_move = find_best_move_easy(board)
    elif difficulty == 'middle':
        best_move = find_best_move_middle(board)
    else:
        best_move = find_best_move_hard(board)

    if best_move is not None:
        board[best_move] = 'O'

    response = {'move': best_move, 'winner': None, 'win_line': None}

    ai_winner, ai_win_line = calculate_winner(board)
    if ai_winner:
        response['winner'] = ai_winner
        response['win_line'] = ai_win_line

    if check_draw(board):
        response['winner'] = 'draw'

    return jsonify(response)


@app.route('/reset', methods=['POST'])
def reset_chat():
    llama_client.reset_chat_history()
    return jsonify({'message': 'Chat history reset successfully'}), 200


@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    user_input = data.get('question')

    llama_client.add_user_message(user_input)

    try:
        response_text = llama_client.generate_response(max_tokens=100)
        llama_client.add_assistant_message(response_text)

        return jsonify({'answer': response_text})

    except Exception as e:
        error_message = f"An error occurred: {str(e)}"
        return jsonify({'error': error_message}), 500
    




if __name__ == '__main__':
    app.run()










