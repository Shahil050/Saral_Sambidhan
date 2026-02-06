from langchain.schema import Document

#faiss in lanchain works with Document objects (text+metadata)
def create_documents(chunks:list[str]):
    documents=[]

    for i, chunk in enumerate(chunks):
        doc=Document(
            page_content=chunk,
            metadata={"chunk_id":i}
        )
        documents.append(doc)
    return documents