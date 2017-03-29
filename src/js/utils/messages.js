export const isHiddenMessage = (message) => (message.text && message.text.indexOf('@@@') === 0);

export const filterHiddenMessages = (messages) => {
    return messages ? messages.filter((message) => !isHiddenMessage(message)) : messages;
};
