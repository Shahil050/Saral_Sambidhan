from langchain_text_splitters import RecursiveCharacterTextSplitter

def split_and_chunking(text:str):


    text_splitter=RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100
    )
    chunks=text_splitter.split_text(text)
    return chunks

# debug purpose only
if __name__ == "__main__":
    from loader import load_constitution_pdf

    text = load_constitution_pdf("resources/Constitution.pdf")
    chunks = split_and_chunking(text)

    print(f"Total chunks: {len(chunks)}")
    print(chunks[5])
