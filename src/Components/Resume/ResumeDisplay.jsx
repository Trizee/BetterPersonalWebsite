import Pdf from "./Pdf.pdf"


export default function PDFViewer(){



    return (
        <>
            <p className="py-6 text-2xl text-gray">Always ready for new <span className="text-black dark:text-white">opportunites.</span></p>

            <p className="bg-gray w-full h-[1px] my-6 opacity-70"></p>
            <div className="flex items-center justify-between">
            </div>

            <div className="py-6">
                <iframe src={Pdf} width="100%" height="680px" className="rounded-lg"/>
            </div>

        </>
        );
}