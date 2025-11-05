from huggingface_hub import InferenceClient



class LlamaClient:
    def __init__(self, model_name: str, token: str):
        self.client = InferenceClient(model_name, token=token)
        self.initial_system_message = {"role": "system", "content": ""}
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

