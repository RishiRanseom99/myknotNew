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


document.getElementById('form__submit').addEventListener('click',function(event){
    event.preventDefault();
    console.log("inside function");
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const phoneno=document.getElementById('phoneno').value;
    const company=document.getElementById('company').value;
    const service=document.getElementById('service').value;
    const date=new Date();
    // validation start
let warnings="Please fill out ";
const WarningOBJ=document.getElementById('form__warnings');
    if(name.length==0)
    {
        warnings+="Name, ";
    }
    if(email.length==0)
    {
        warnings+="Email ";
    }
    else if(!/[0-9A-Za-z][0-9A-Za-z]*@[A-Za-z][A-za-z]*.[a-z][a-z]*$/.test(email))
   {
       warnings+="Correct Email ";
   }
    console.log(warnings);
    // validation end

    if(warnings!="Please fill out ")
    {WarningOBJ.innerHTML=warnings;}
    else{
        console.log(name,email,phoneno,company,service,date);
    fetch("https://api.apispreadsheets.com/data/5758/", {
        method: "POST",
        body: JSON.stringify({"data": {"Name":name,"Email":email,"Phone No":phoneno,"Company Name":company,"Type of Service":service,"DATE":date}}),
    }).then(res =>{
        if (res.status === 201){
            // SUCCESS
            WarningOBJ.innerHTML="We Will contact you soon";
            
        }
        else{
            // ERROR
            WarningOBJ.innerHTML="Please refill the form";
            
        }
        setTimeout(()=>{
            WarningOBJ.innerHTML="";
        },5000);
    })
    }
    
    
    
});