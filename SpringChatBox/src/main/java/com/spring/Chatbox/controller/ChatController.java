package com.spring.Chatbox.controller;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

import com.spring.Chatbox.model.ChatMessage;

@Controller
public class ChatController {

    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(ChatMessage chatMessage) {
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public ChatMessage addUser(ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        // Add username to WebSocket session attributes
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        chatMessage.setContent(chatMessage.getSender() + " has joined the chat");
        chatMessage.setType(ChatMessage.MessageType.JOIN);
        return chatMessage;
    }

    @MessageMapping("/chat.removeUser")
    @SendTo("/topic/public")
    public ChatMessage removeUser(ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        // Remove the username from WebSocket session attributes
        headerAccessor.getSessionAttributes().remove("username");
        chatMessage.setContent(chatMessage.getSender() + " has left the chat");
        chatMessage.setType(ChatMessage.MessageType.LEAVE);
        return chatMessage;
    }
}

