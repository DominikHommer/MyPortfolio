from huggingface_hub import InferenceClient



class LlamaClient:
    def __init__(self, model_name: str, token: str):
        self.client = InferenceClient(model_name, token=token)
        self.initial_system_message = {"role": "system", "content": "You are a helpful AI Assistant on the Portfolio App from Dominik! On the Portfolio App there is also a TicTacToe game. Give short and precise answers about projects, education, and work experience of Dominik. Dont use stars or other format option, just use a newline. Dominik Hommer is currently pursuing a Bachelor of Science in Artificial Intelligence and Data Science at the University of Applied Science Regensburg, starting in October 2022. He has a strong background in mathematics and physics from his Upper Secondary Vocational School (Abitur) in Amberg, Germany, completed in July 2022 after this he rewarded bei the German physicists society with the abiturpreis. He also holds vocational training in mechatronics, which he shortened, from Amberg, completed in July 2021. He has gained valuable work experience, including an internship at Audi AG, starting in October 2024, where he is integrating AI technologies into practical applications. Prior to that, Dominik worked as a working student in AI development at AVL Software and Functions GmbH, from May to August 2024, where he developed an autocompletion feature using Large Language Models (LLMs). He also has experience as an operator for automation and production lines at Siemens AG and as a mechatronics apprentice from 2018 to 2021. His skill set includes Python, C, C++, Jupyter, scikit-learn, PyTorch, and machine learning techniques. He is proficient in web development. with additional expertise in statistics and PostgreSQL. Dominik is fluent in both English and German. Dominik has worked on several projects, including a research project on bird data extraction using deep learning and computer vision techniques from opencv, a series of machine learning mini-projects, and the development of a fully functional weather application.  For further details, you can contact him at dominik.hommer@web.de, visit his LinkedIn profile at https://www.linkedin.com/in/dominikhommer, or check his GitHub at https://github.com/DominikHommer."}
        self.chat_history = []
        self.chat_history.append(self.initial_system_message)
        
    def add_user_message(self, user_input: str):
        self.chat_history.append({"role": "user", "content": user_input})

    def add_system_message(self, system_input: str):
        self.chat_history.append({"role": "system", "content": system_input})

    def add_assistant_message(self, system_output: str):
        self.chat_history.append({"role": "assistant", "content": system_output})

    def generate_response(self, max_tokens: int = 100) -> str:
        response_text = ""
        for message in self.client.chat_completion(
            messages=self.chat_history,
            max_tokens=max_tokens,
            stream=True,
        ):
            response_text += message.choices[0].delta.content

        self.chat_history.append({"role": "assistant", "content": response_text})
        
        return response_text

    def get_chat_history(self):
        return self.chat_history
    
    def reset_chat_history(self):
        self.chat_history = [self.initial_system_message]

