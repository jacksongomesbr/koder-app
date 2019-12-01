// Generated from Koder.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var KoderVisitor = require('./KoderVisitor').KoderVisitor;

var grammarFileName = "Koder.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\t!\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0005\u0002\r\n\u0002\u0006",
    "\u0002\u000f\n\u0002\r\u0002\u000e\u0002\u0010\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003\u0018\n\u0003\f\u0003",
    "\u000e\u0003\u001b\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0003",
    "\u0003\u0002\u0005\b\u0002\u001f\u0002\u000e\u0003\u0002\u0002\u0002",
    "\u0004\u0014\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002\u0002\u0002",
    "\b\u001e\u0003\u0002\u0002\u0002\n\f\u0005\u0004\u0003\u0002\u000b\r",
    "\u0007\u0004\u0002\u0002\f\u000b\u0003\u0002\u0002\u0002\f\r\u0003\u0002",
    "\u0002\u0002\r\u000f\u0003\u0002\u0002\u0002\u000e\n\u0003\u0002\u0002",
    "\u0002\u000f\u0010\u0003\u0002\u0002\u0002\u0010\u000e\u0003\u0002\u0002",
    "\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u0012\u0003\u0002\u0002",
    "\u0002\u0012\u0013\u0007\u0002\u0002\u0003\u0013\u0003\u0003\u0002\u0002",
    "\u0002\u0014\u0019\u0005\u0006\u0004\u0002\u0015\u0016\u0007\u0003\u0002",
    "\u0002\u0016\u0018\u0005\b\u0005\u0002\u0017\u0015\u0003\u0002\u0002",
    "\u0002\u0018\u001b\u0003\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002",
    "\u0002\u0019\u001a\u0003\u0002\u0002\u0002\u001a\u0005\u0003\u0002\u0002",
    "\u0002\u001b\u0019\u0003\u0002\u0002\u0002\u001c\u001d\t\u0002\u0002",
    "\u0002\u001d\u0007\u0003\u0002\u0002\u0002\u001e\u001f\u0007\t\u0002",
    "\u0002\u001f\t\u0003\u0002\u0002\u0002\u0005\f\u0010\u0019"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "' '", null, "'direita'", "'esquerda'", "'para cima'", 
                     "'para baixo'" ];

var symbolicNames = [ null, null, "NEWLINE", "CMD_DIREITA", "CMD_ESQUERDA", 
                      "CMD_ACIMA", "CMD_ABAIXO", "INT" ];

var ruleNames =  [ "programa", "linha", "comando", "parametro" ];

function KoderParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

KoderParser.prototype = Object.create(antlr4.Parser.prototype);
KoderParser.prototype.constructor = KoderParser;

Object.defineProperty(KoderParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

KoderParser.EOF = antlr4.Token.EOF;
KoderParser.T__0 = 1;
KoderParser.NEWLINE = 2;
KoderParser.CMD_DIREITA = 3;
KoderParser.CMD_ESQUERDA = 4;
KoderParser.CMD_ACIMA = 5;
KoderParser.CMD_ABAIXO = 6;
KoderParser.INT = 7;

KoderParser.RULE_programa = 0;
KoderParser.RULE_linha = 1;
KoderParser.RULE_comando = 2;
KoderParser.RULE_parametro = 3;


function ProgramaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KoderParser.RULE_programa;
    return this;
}

ProgramaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramaContext.prototype.constructor = ProgramaContext;

ProgramaContext.prototype.EOF = function() {
    return this.getToken(KoderParser.EOF, 0);
};

ProgramaContext.prototype.linha = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LinhaContext);
    } else {
        return this.getTypedRuleContext(LinhaContext,i);
    }
};

ProgramaContext.prototype.NEWLINE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(KoderParser.NEWLINE);
    } else {
        return this.getToken(KoderParser.NEWLINE, i);
    }
};


ProgramaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KoderVisitor ) {
        return visitor.visitPrograma(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KoderParser.ProgramaContext = ProgramaContext;

KoderParser.prototype.programa = function() {

    var localctx = new ProgramaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, KoderParser.RULE_programa);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this.linha();
            this.state = 10;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===KoderParser.NEWLINE) {
                this.state = 9;
                this.match(KoderParser.NEWLINE);
            }

            this.state = 14; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KoderParser.CMD_DIREITA) | (1 << KoderParser.CMD_ESQUERDA) | (1 << KoderParser.CMD_ACIMA) | (1 << KoderParser.CMD_ABAIXO))) !== 0));
        this.state = 16;
        this.match(KoderParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function LinhaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KoderParser.RULE_linha;
    return this;
}

LinhaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LinhaContext.prototype.constructor = LinhaContext;

LinhaContext.prototype.comando = function() {
    return this.getTypedRuleContext(ComandoContext,0);
};

LinhaContext.prototype.parametro = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParametroContext);
    } else {
        return this.getTypedRuleContext(ParametroContext,i);
    }
};

LinhaContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KoderVisitor ) {
        return visitor.visitLinha(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KoderParser.LinhaContext = LinhaContext;

KoderParser.prototype.linha = function() {

    var localctx = new LinhaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, KoderParser.RULE_linha);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this.comando();
        this.state = 23;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===KoderParser.T__0) {
            this.state = 19;
            this.match(KoderParser.T__0);
            this.state = 20;
            this.parametro();
            this.state = 25;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ComandoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KoderParser.RULE_comando;
    return this;
}

ComandoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComandoContext.prototype.constructor = ComandoContext;

ComandoContext.prototype.CMD_DIREITA = function() {
    return this.getToken(KoderParser.CMD_DIREITA, 0);
};

ComandoContext.prototype.CMD_ESQUERDA = function() {
    return this.getToken(KoderParser.CMD_ESQUERDA, 0);
};

ComandoContext.prototype.CMD_ACIMA = function() {
    return this.getToken(KoderParser.CMD_ACIMA, 0);
};

ComandoContext.prototype.CMD_ABAIXO = function() {
    return this.getToken(KoderParser.CMD_ABAIXO, 0);
};

ComandoContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KoderVisitor ) {
        return visitor.visitComando(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KoderParser.ComandoContext = ComandoContext;

KoderParser.prototype.comando = function() {

    var localctx = new ComandoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, KoderParser.RULE_comando);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << KoderParser.CMD_DIREITA) | (1 << KoderParser.CMD_ESQUERDA) | (1 << KoderParser.CMD_ACIMA) | (1 << KoderParser.CMD_ABAIXO))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParametroContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = KoderParser.RULE_parametro;
    return this;
}

ParametroContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametroContext.prototype.constructor = ParametroContext;

ParametroContext.prototype.INT = function() {
    return this.getToken(KoderParser.INT, 0);
};

ParametroContext.prototype.accept = function(visitor) {
    if ( visitor instanceof KoderVisitor ) {
        return visitor.visitParametro(this);
    } else {
        return visitor.visitChildren(this);
    }
};




KoderParser.ParametroContext = ParametroContext;

KoderParser.prototype.parametro = function() {

    var localctx = new ParametroContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, KoderParser.RULE_parametro);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.match(KoderParser.INT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.KoderParser = KoderParser;
