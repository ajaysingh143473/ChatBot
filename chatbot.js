const chatInput = document.querySelector(".chat-input textarea")
const sendChatBtn = document.querySelector(".chat-input i");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler")

let userMessage;

function replaceResponse(){
    const lastChatli = chatbox.lastChild;
    let finalResponse = generateResponse(userMessage);
    let replac = lastChatli.querySelector("p").innerText;
    console.log(replac);
    
    if(replac === "Thinking....."){
        
        lastChatli.querySelector("p").innerText = "Thinking.....";
    }
    else {
        lastChatli.querySelector("p").innerText = finalResponse;
    }
    chatbox.scrollTo(0,scrollHeight);
}
function generateResponse(msg){
    msg = msg.toLowerCase();

    if (msg.includes('hello') || msg.includes('hlo') || msg.includes('my name is')) {
        let userNameMatch = msg.match(/my name is (.+?)\b/);

        if (userNameMatch) {
            let userName = userNameMatch[1];
            return `Hello, ${userName}! How can I assist you today?`;
        } else 
            return "Hello! How can I assist you today?";

    } else if (msg.includes('help me')||msg.includes('help')) {
        return "Certainly! What do you need help with?";
    } else if (msg.includes('thank you')||msg.includes('thanks')||msg.includes('tq')||msg.includes('thank u')) {
        return "You're welcome! 😊";
    } else if (msg.includes('sciastra') || msg.includes('what is sciastra')) {
        return "SciAstra is the biggest community of science scholars in India for IISER Aptitude test (IAT), National Entrance Screening Test (NEST), ISI, CMI, and IACS."
    }else if(msg.includes('which courses are currently available')){
        return "We offer a diverse range of courses in CUET, IISc, IISERs, NISER, ISI. You can explore them on our website, and feel free to ask for recommendations based on your interests.";
    } else if(msg.includes('how do i enroll in a course')){
        return "Enrolling is easy! Visit our website, choose your desired course, and follow the simple enrollment steps.";
    } else if(msg.includes('is there a demo') || msg.includes('trial for any courses')){
        return "Yes, we are starting at 1 example courses ISI & CMI 2024 Preparation Guide, NEST 2024 Preparation Guide...etc for more information visit course section.";
    } else if(msg.includes('what is the duration')){
        return "Our courses vary in duration, and you can find specific timelines on each course page.";
    } else if(msg.includes('do you provide certificates')){
        return "Yes, upon successful completion, you'll receive a certificate.";
    } else if(msg.includes('can i take multiple courses simultaneously')){
        return "Yes, you can take multiple courses simultaneously. if they have the time and capacity to manage the workload effectively.";
    } else if(msg.includes('can i cancel') || msg.includes("change my course")){
        return "We understand that circumstances may change. Please review our refund policy on our website for detailed information on the process and conditions";
    } else if(msg.includes('can i see reviews')){
        return "Check out reviews from other students on our website. We value your feedback, and you can share your thoughts on the course directly through the platform";
    } else if(msg.includes('career guidance')){
        return "We provide career guidance and resources post-course completion.our courses are designed to enhance your skills for career advancement.";
    } else if(msg.includes('study material')){
        return "Free Study Material Designed By Our Team,You can check it in Resources section";
    } else if(msg.includes('mock tests') || msg.includes('mocktests') || msg.includes('mocktests')){
        return "We are providing some free Mock Tests on some course check it in Resources section";
    } else if(msg.includes('lectures') || msg.includes('class') || msg.includes('classes')){
        return "We are providing Recording classes also like Biology, Mathematics , Chemistry, Physics ...etc";
    } else if(msg.includes('internship')){
        return "we are providing classes on 'How to get Internship', 'How to write internship mails','Internship Opportunities'";
    } else if(msg.includes('contact') || msg.includes('company details')){
        return "SciAstra Address,SciAstra Education Pvt Ltd, Bhubaneswar, Odisha, support@sciastra.com";
    } else if(msg.includes('books')){
        return "we are providing several books for preparation example  Mastering Combo - Class 11th & 12th Bookset ...etc";
    } else if(msg.includes('phd')){
        return "we are providing on PhD - Abroad Workshop see in course section.";
    } else if (msg.includes('how are you')) {
        return "I'm just a computer program, but I'm here and ready to help. What can I do for you?";
    } else if (msg.includes('what is your name')) {
        return "You can call me ChatBot. How may I help you?";
    } else if (msg.includes('tell me a joke')) {
        return "Sure, here's one: Why did the bicycle fall over? Because it was two-tired!";
    } else if (msg.includes('tell me about yourself')) {
        return "I'm a virtual assistant designed to assist you with information and tasks. Feel free to ask me anything!";
    } else if (msg.includes('how does a computer work')) {
        return "Computers process information using binary code (0s and 1s) and follow instructions provided by software.";
    } else if (msg.includes('where are you from')) {
        return "I don't have a specific origin as I'm a virtual assistant. How can I assist you?";
    } else if (msg.includes('who is your creator')) {
        return "I'm a creation of programming and algorithms, not a product of personal creation. What can I do for you?";
    } else if (msg.includes('what can you do')) {
        return "I can help answer questions, provide information, and assist with various tasks. Feel free to ask me anything!";
    } else if (msg.includes('good morning')) {
        return "Good morning! How can I make your day better?";
    } else if (msg.includes('good afternoon')) {
        return "Good afternoon! How can I assist you?";
    } else if (msg.includes('good evening')) {
        return "Good evening! Is there anything I can help you with?";
    } else if (msg.includes('good night')) {
        return "Good night! If you have more questions, feel free to ask tomorrow.";
    }else if (msg.includes('goodbye') || msg.includes('bye')) {
        return "Goodbye! If you have more questions later, don't hesitate to ask.";
    } else {
        return "I'm sorry, I don't understand. Can you please rephrase your question?";
    }
    
}
const inputinitHeight = chatInput.scrollHeight;
const createChatli = (message,className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent = className === "incoming" ? `<p> ${message} </p> `: `<i class="bi bi-robot" alter="Smart_Bot"></i> <p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

const handleChat = () => {
    userMessage =chatInput.value.trim();
    chatInput.value = "";
    console.log(userMessage);
    chatbox.appendChild(createChatli(userMessage,"incoming"));
    chatbox.appendChild(createChatli("Thinking....","outgoing"));
    chatbox.scrollTo(0,chatbox.scrollHeight);
    setTimeout(() => {
        replaceResponse();
        chatbox.scrollTo(0,chatbox.scrollHeight);
    }, 1000);
}

chatInput.addEventListener("input",()=>{
    chatInput.computedStyleMap.height =`${inputinitHeight}px`;
    chatInput.computedStyleMap.height =`${chatInput.scrollHeight}px`;
})
chatbotToggler.addEventListener("click",() => document.body.classList.toggle("show-chatbot"));
sendChatBtn.addEventListener("click",handleChat);
