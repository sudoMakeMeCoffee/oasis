package com.oasis.service.impl;

import com.oasis.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
public class EmailServiceImpl implements EmailService {
    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    public EmailServiceImpl(JavaMailSender mailSender, TemplateEngine templateEngine) {
        this.mailSender = mailSender;
        this.templateEngine = templateEngine;
    }

    @Override
    public void sendEmail(String to, String subject, String code) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject(subject);
            helper.setFrom("no-reply@hackathonhub.com");

            Context context = new Context();
            context.setVariable("code", code);

            String htmlContent = templateEngine.process("signup", context);
            helper.setText(htmlContent, true); // send HTML

            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Email send failed", e);
        }
    }
}
