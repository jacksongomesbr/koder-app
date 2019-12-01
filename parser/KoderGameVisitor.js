var antlr4 = require('../antlr4/index');
var KoderLexer = require('../parser/KoderLexer');
var KoderParser = require('../parser/KoderParser');
var KoderVisitor = require('../parser/KoderVisitor').KoderVisitor;

KoderGameVisitor = function (game, player) {
    KoderVisitor.call(this);
    this.game = game;
    this.player = player;
    return this;
}

KoderGameVisitor.prototype = Object.create(KoderVisitor.prototype);

KoderGameVisitor.prototype.constructor = KoderGameVisitor;

KoderGameVisitor.prototype.visitPrograma = function (ctx) {
    // console.debug('visitPrograma', ctx.getText());
    return this.visitChildren(ctx);
    // return null;
}

KoderGameVisitor.prototype.visitLinha = function (ctx) {
    // console.debug('visitLinha', ctx.getText());
    // console.debug('children', ctx.children);
    var comando = ctx.children[0].getText();
    var parametro = ctx.children[2].getText();
    addComando(comando, parametro);
    // this.player.x += 50;
    // console.debug({comando, parametro});
    // return this.visitChildren(ctx);
    return null;
};

// KoderGameVisitor.prototype.visitComando = function (ctx) {
//     console.debug('visitComando', ctx.getText());
//     if (ctx.children.length > 0) {
//         console.debug(ctx.children[0]);
//     }
//     console.debug('visitChildren', this.visitChildren(ctx));
//     return null;
//     //return this.visitChildren(ctx);
// };

// KoderGameVisitor.prototype.visitParametro = function (ctx) {
//     console.debug('visitParametro', ctx.getText());
//     return parseInt(ctx.getText());
// };



exports.KoderGameVisitor = KoderGameVisitor;