const showmore=(event)=>{
    // console.log("hello inside the showmore function");
    const faqID="faq"+event;
    const faqIDdoc=document.getElementById(faqID);
    // console.log(faqIDdoc.classList);
    if(faqIDdoc.className==="faq__answers")
    {
        // console.log("if loop");
        faqIDdoc.className = "faq__answers__visible";
    }
    else{
        // console.log("else loop");
        faqIDdoc.className = "faq__answers";
    }
    
}
const addMoreFAQ=()=>{
    // console.log("button pressed");
    let button=document.getElementById('viewMoreButton');
    let faq_col2=document.getElementById("faq__content__col2");
    // console.log(button.innerHTML);

    if(button.innerHTML==="View All FAQ")
    {
        console.log("if");
        faq_col2.style.display="block";
        button.innerHTML="View Less FAQ";
    }
    else{
        console.log("else");
        faq_col2.style.display="none";
        button.innerHTML="View All FAQ";
    }
    

};