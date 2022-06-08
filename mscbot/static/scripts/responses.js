function getBotResponse(input) {
    //rock paper scissors
    if (input == "I") {
        return "Love";
    } else if (input == "Love") {
        return "You";
    } else if (input == "You") {
        return "I";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}