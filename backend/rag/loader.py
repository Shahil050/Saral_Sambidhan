# from langchain_google_genai import ChatGoogleGenerativeAI

# llm = ChatGoogleGenerativeAI(
#     model="gemini-pro",
#     temperature=0.2
# )



from pypdf import PdfReader

def load_constitution_pdf(pdf_path:str)->str:
    reader=PdfReader(pdf_path) # Reads the file from path
    full_text=""   # assigning all the extracted text from pdf as String

    for page_num,page in enumerate(reader.pages):
        page_text=page.extract_text()
        if page_text:
            full_text += f"\n\n---Page {page_num +1} ---\n"
            full_text += page_text

    return full_text



# for debug only purpose
if __name__ == "__main__": 
    text = load_constitution_pdf("resources/Constitution.pdf")
    print(text[2000:10000])

