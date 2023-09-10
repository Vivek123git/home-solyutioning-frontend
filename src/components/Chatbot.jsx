import React,{useState} from "react";
import ChatBot from "react-simple-chatbot";
import ChatIcon from '@mui/icons-material/Chat';



const ChatBotrobo = () => {

  const [message, setMessage] = useState("");

  const steps = [
    {
        id: "1",
        message: "Hi, what is your name?",
        trigger: "name"
      },
      {
        id: "name",
        user: true,
        trigger: "3"
      },
      {
        id: "3",
        message: "Hi {previousValue}! How can I help you?",
        trigger: "4"
      },
      {
        id: "4",
        options: [
          {
            value: "enquiry",
            label: "Services Enquiry",
            trigger: "enquiry"
          },
          {
            value: "complaint",
            label: "Services Complaint",
            trigger: "complaint"
          },
          {
            value: "about",
            label: "About Us",
            trigger: "about"
          },
          {
            value: "nothing",
            label: "Nothing",
            trigger: "end"
          }
        ]
      },
      {
        id: "enquiry",
        options: [
          {
            value: "electrician",
            label: "Electrician",
            trigger: "electrician"
          },
          {
            value: "plumber",
            label: "Plumber",
            trigger: "plumber"
          },
          {
            value: "actechnician",
            label: "AC Technician",
            trigger: "actechnician"
          },
          {
            value: "cctv",
            label: "CCTV",
            trigger: "cctv"
          },
          {
            value: "ro",
            label: "R.O.",
            trigger: "ro"
          },
          {
            value: "broadband",
            label: "BroadBand",
            trigger: "broadband"
          },
        ]
      },
      {
        id: "complaint",
        message: "Please call on this no. 987****** for register your services complaint",
        trigger: "8"
      },
      {
        id: "about",
        message: "We are providing home services",
        trigger: "8"
      },
      {
        id: "8",
        message: "Anything else?",
        trigger: "4"
      },
      {
        id: "end",
        message: "Thank you for visiting.",
        end: true
      },
      {
        id: "electrician",
        message: "Do you want electrician services?",
        trigger: "conf"
      },
      {
        id: "plumber",
        message: "Do you want plumber services?",
        trigger: "conf"
      },
      {
        id: "actechnician",
        message: "Do you want AC technician services?",
        trigger: "conf"
      },
      {
        id: "cctv",
        message: "Do you want CCTV services?",
        trigger: "conf"
      },
      {
        id: "ro",
        message: "Do you want RO services?",
        trigger: "conf"
      },
      {
        id: "broadband",
        message: "Do you want Broadband services?",
        trigger: "conf"
      },
      {
        id: "conf",
        options: [
          {
            value: "yes",
            label: "Yes",
            trigger: "Yes"
          },
          {
            value: "no",
            label: "No",
            trigger: "8"
          }
        ]
      },
      {
        id: "Yes",
        message: "Please Call on this Number 123*****. Thank you",
        trigger: 8
      },
      // {
      //   id: "getMobile",
      //   user: true,
      //   trigger: "address"
      // },
      // {
      //   id: "address",
      //   message: "Please tell me your home address.",
      //   trigger: "getAddress"
      // },
      // {
      //   id: "getAddress",
      //   user: true,
      //   trigger: "confirm"
      // },
      // {
      //   id: "confirm",
      //   message: "Our team will reach you soon. Thank you!",
      //   trigger: 8
      // }
  ];

  const handleUserInput = input => {
    setMessage(input);
  };


  const handleEnd = () => {
    console.log(message)
    // Send message to backend API
    // fetch('/api/chatbot', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ message })
    // })
    //   .then(response => {
    //     // handle response
    //   })
    //   .catch(error => {
    //     // handle error
    //   });
  };

  return (
    <div className="Container" style={{ backgroundColor: "blue", color: "red" }}>
    <ChatBot
      steps={steps}
      headerTitle="Chatbot"
      botfontColor="red"
      botAvatar="https://i.imgur.com/7S7dYmS.png"
      userAvatar="https://i.imgur.com/2d12hjO.png"
      floating={true}
      floatingIcon={<ChatIcon style={{color:"#fff"}}  fontSize="large"/>}
      recognitionEnable={true}
      recognitionLang={"en"}
      recognitionPlaceholder={"Type here..."}
      handleEnd={handleEnd}
      userInput={handleUserInput}
    />
  </div>
  )
  }
  export default ChatBotrobo;