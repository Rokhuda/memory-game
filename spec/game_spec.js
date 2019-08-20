var jsdom = require("jsdom");

describe(" memory game ", function () {

    beforeEach(function () {
        const dom = new jsdom.JSDOM('<section class="game"><div class="card" data-framework="ichigo"><img class="front-face" src="images/ichigo.png" alt="ichigo" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="ichigo"><img class="front-face" src="images/ichigo.png" alt="ichigo" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="goku"><img class="front-face" src="images/goku.png" alt="goku" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="goku"><img class="front-face" src="images/goku.png" alt="goku" /><img class="back-face" src="images/avatar.png" alt="anime" /></div></div><div class="card" data-framework="amnesia"><img class="front-face" src="images/amnesia.png" alt="amnesia" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="amnesia"><img class="front-face" src="images/amnesia.png" alt="amnesia" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="luffy"><img class="front-face" src="images/luffy.png" alt="luffy" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="luffy"><img class="front-face" src="images/luffy.png" alt="luffy" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="kuroko"><img class="front-face" src="images/kuroko.png" alt="kuroko" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="kuroko"><img class="front-face" src="images/kuroko.png" alt="kuroko" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="naruto"><img class="front-face" src="images/naruto.png" alt="naruto" /><img class="back-face" src="images/avatar.png" alt="anime" /></div><div class="card" data-framework="naruto"><img class="front-face" src="images/naruto.png" alt="naruto" /><img class="back-face" src="images/avatar.png" alt="anime" /></div></section>');
        global.document = dom.window.document;
        global.window = dom.window;
        global.navigator = dom.window.navigator;

    })
    it("should check if cards is defined", function () {
        let cards = require("../gameSrc")
        expect(cards).toBeDefined();
    });

    it("should add an event listener to every card", function () {
        let card = require("../gameSrc")
        expect(card).toBeDefined();
    });
        it("should add an event listener to every card", function () {
            let card = require("../gameSrc")
            expect(card).toBeDefined();
        });
        it("should open card when it clicked on", function () {
            let openCard = require("../gameSrc")
            expect(openCard()).toBeDefined();
        })
    
        it("should close card when it clicked on", function () {
            let closeCard = require("../gameSrc")
            expect(closeCard()).toBeDefined();
        })
        it("should close card when it clicked on", function () {
            let setTimeout = require("../gameSrc")
            expect(setTimeout).toBeDefined();
        })
        it("should check if cards", function () {
            let checkMatch = require("../gameSrc")
            expect(checkMatch()).toBeDefined();
        })
        it("should disable cards if they have matched", function () {
            let disableCards = require("../gameSrc")
            expect(disableCards()).toBeDefined();
        })
        it("should reset board every time after checking if cards match ", function () {
            let resetBoard = require("../gameSrc")
            expect(resetBoard()).toBeDefined();
        })
        it("should check if openCard method is set to false when the board reset ", function () {
            let resetBoard = require("../gameSrc")
            let openedCard = true;
            let boardObj = resetBoard(openedCard);
            expect(boardObj.openedCard).toBe(false);
        })
        it("should check if the lockBoard function is set to false when the board resets ", function () {
            let resetBoard = require("../gameSrc")
            let lockBoard = true;
            let boardObj = resetBoard(lockBoard);
            expect(boardObj.lockBoard).toBe(false);
        })
        it("should check if the card one is set to null when the board resets ", function () {
            let resetBoard = require("../gameSrc")
            let cardOne = 1;
            let boardObj = resetBoard(cardOne);
            expect(boardObj.cardOne).toBeNull;
        })
        it("should check if the card two is set to null when the board resets ", function () {
            let resetBoard = require("../gameSrc")
            let cardTwo = 1;
            let boardObj = resetBoard(cardTwo);
            expect(boardObj.cardTwo).toBeNull;
        })
        it("shuffle cards and place then randomly on the blocks", function () {
            let shuffle = require("../gameSrc")
            expect(shuffle()).toBeDefined();
        
        })
        it("shuffle cards and place then randomly on the blocks", function () {
            let shuffle = require("../gameSrc")

        })
    });
