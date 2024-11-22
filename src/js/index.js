'use strict';

class EmailService {
    static #instance;
    #logs = [];

    constructor() {
        if (EmailService.#instance) {
            return EmailService.#instance;
        }
        EmailService.#instance = this;
        this.emails = [];
        this._log('EmailService створено');
    }

    _log(message) {
        this.#logs.push(message);
        console.log(message);
    }

    getLogs() {
        return this.#logs;
    }
}

class PremiumEmailService extends EmailService {
    static #instance;
    #premiumEmails = [];
    static MAX_PREMIUM_EMAILS = 5;

    constructor() {
        if (PremiumEmailService.#instance) {
            return PremiumEmailService.#instance;
        }
        super();
        PremiumEmailService.#instance = this;
        this._log('PremiumEmailService створено');
    }

    addPremiumEmail(email) {
        if (
            this.#premiumEmails.length >= PremiumEmailService.MAX_PREMIUM_EMAILS
        ) {
            this._log('Ліміт преміум email-ів досягнуто');
            throw new Error('Ліміт преміум email-ів досягнуто');
        }
        this.#premiumEmails.push(email);
        this._log(`Преміум email додано: ${email}`);
    }

    getPremiumEmails() {
        return this.#premiumEmails;
    }
}

const premiumService1 = new PremiumEmailService();
const premiumService2 = new PremiumEmailService();

premiumService1.addPremiumEmail('vip1@premium.com');
console.log(premiumService1.getPremiumEmails());

console.log(premiumService1 === premiumService2);
