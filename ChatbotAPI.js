const API = {
  GetChatbotResponse: async message => {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (message === "hi") resolve("Willkommen beim Fördernavigator. Hier erhalten Sie einen Überblick über Förderprogramme des Bundes, der Länder und der Europäischen Union: Nutzen Sie die Chatfunktion und durchforsten Sie das aktuelle Förderangebot – passgenau für Ihr Vorhaben. ");
        else resolve("echo : " + message);
      }, 2000);
    });
  }
};

export default API;
