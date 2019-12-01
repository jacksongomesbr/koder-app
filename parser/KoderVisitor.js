// Generated from Koder.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by KoderParser.

function KoderVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

KoderVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
KoderVisitor.prototype.constructor = KoderVisitor;

// Visit a parse tree produced by KoderParser#programa.
KoderVisitor.prototype.visitPrograma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KoderParser#linha.
KoderVisitor.prototype.visitLinha = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KoderParser#comando.
KoderVisitor.prototype.visitComando = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by KoderParser#parametro.
KoderVisitor.prototype.visitParametro = function(ctx) {
  return this.visitChildren(ctx);
};



exports.KoderVisitor = KoderVisitor;