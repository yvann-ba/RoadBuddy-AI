from pydantic import BaseModel
from typing import Optional, List

class ExamChatRequestBody(BaseModel):
    image_url: str
    city: Optional[str] = "Paris"


class AnswerChoice(BaseModel):
    id: str
    text: str

class ExamChatResponseBody(BaseModel):
    image_url: str
    question_text: str
    correct_answer_id: str
    choices: List[AnswerChoice]
    explanation: str
    chat_id: str