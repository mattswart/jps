export default function FaqItem({ question, answer, isOpen, onClick }) {
  return (
    <div className="faq-item">
        <div className="
                question 
                w-fill 
                relative
                py-[10px] 
                rounded-tr-[1px] 
                rounded-tl-[1px]  
                bg-white 
                cursor-pointer 
                flex 
                justify-between 
                items-center 
                text-left
            " 
             onClick={onClick}
        >
            <div className={`absolute flex items-center justify-center transition-all duration-500 ease-in-out  ${isOpen ? "ml-[16px]" : "ml-0"}`}>
                <span className={`block h-1 bg-black ${isOpen ? 'w-6' : 'w-[32px]'} transition-all duration-500 ease-in-out`}></span>
                <span className={`block w-1 bg-black ${isOpen ? 'h-6' : 'h-[32px]'} absolute transition-all duration-500 ease-in-out ${isOpen ? 'rotate[0deg]' : 'rotate-[-450deg]'}`}></span>
            </div>
            <h3 className="pl-[48px] uppercase text-l text-black font-bold tracking-wide">
                {question}
            </h3>
        </div>
        <div className={`answer rounded-br-[1px] rounded-bl-[1px] border-x-[6px] sm:border-x-[12px] border-white overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 border-b-[6px] sm:border-b-[12px]' : 'max-h-0'}`}>
            <p className="text-black rounded-[1px] bg-white p-[12px] m-[6px] sm:m-[12px]">{answer}</p>
        </div>
    </div>
  );
};