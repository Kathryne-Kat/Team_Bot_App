const hello = require("../adaptiveCards/hi.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class Hello {
  triggerPatterns = "hello";

  async handleCommandReceived(context, message) {
    console.log(`Bot received message: ${message.text}`);

    // render your adaptive card for reply message
    const cardData = {
      title: "Hello user!",
      body: "What is you name? Click the button below to trigger an action.",
    };

    const cardJson = AdaptiveCards.declare(hello).render(cardData);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
  Hello,
};
