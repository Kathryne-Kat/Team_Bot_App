const { AdaptiveCards } = require("@microsoft/adaptivecards-tools");
const { InvokeResponseFactory } = require("@microsoft/teamsfx");
const responseCard = require("../adaptiveCards/yesActionResponse.json");

class OkActionHandler {
  /**
   * A global unique string associated with the `Action.Execute` action.
   * The value should be the same as the `verb` property which you define in your adaptive card JSON.
   */
  triggerVerb = "Ok";

  async handleActionInvoked(context, message) {
    /**
     * You can send an adaptive card to respond to the card action invoke.
     */
    const cardData = {
      title: "Привіт!",
      body: "Хто твій менеджер",
    };

    const cardJson = AdaptiveCards.declare(responseCard).render(cardData);
    return InvokeResponseFactory.adaptiveCard(cardJson);

    /**
     * If you want to send invoke response with text message, you can:
     * 
     return InvokeResponseFactory.textMessage("[ACK] Successfully!");
     */

    /**
     * If you want to send invoke response with error message, you can:
     *
     * return InvokeResponseFactory.errorResponse(InvokeResponseErrorCode.BadRequest, "The incoming request is invalid.");
     */
  }
}

module.exports = {
  OkActionHandler,
};
