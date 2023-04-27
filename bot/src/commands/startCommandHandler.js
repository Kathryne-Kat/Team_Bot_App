const startCard = require("../adaptiveCards/startCommandResponse.json");
const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { CardFactory, MessageFactory } = require("botbuilder");

class StartCommandHandler {
  triggerPatterns = "start";

  async handleCommandReceived(context, message) {
    console.log(`Bot received message: ${message.text}`);

    // render your adaptive card for reply message
    const cardData = {
      title: "Твій бот кар'єрний-помічник вітає тебе!",
      body: "Я можу допомогти тобі побачити твої кар'єрні можливості у нашій компанії. Чи хочеш ти дізнатися більше про можливості розвитку твоєї кар'єри? ",
    };

    const cardJson = AdaptiveCards.declare(startCard).render(cardData);
    console.log(cardJson);
    return MessageFactory.attachment(CardFactory.adaptiveCard(cardJson));
  }
}

module.exports = {
  StartCommandHandler,
};
