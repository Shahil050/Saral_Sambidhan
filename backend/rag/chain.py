from langchain.prompts import PromptTemplate

prompt = PromptTemplate(
    input_variables=["context", "question"],
    template="""

    "Hina, Paste the prompt here "

Context:
{context}

Question:
{question}
"""
)
