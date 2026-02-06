from langchain.vectorstores import FAISS

#creating faiss index
def create_database_index(documents,embeddings):
    vectorstore=FAISS.from_documents(
        documents=documents,
        embedding=embeddings
    )
    return vectorstore

#saving vector embeddings
def save_faiss_index(vectorstore,path="faiss_index"):
    vectorstore.save_local(path)
