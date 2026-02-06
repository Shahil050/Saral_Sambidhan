from langchain.text_splitter import RecursiveCharacterTextSplitter

def split_and_chunking(text:str):


    splitter=RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100
    )
    chunks=splitter.split_text(text)
    return chunks

# debug purpose only