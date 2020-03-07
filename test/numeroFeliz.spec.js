import { expect } from 'chai'
import { NumeroFeliz } from '../src/numeroFeliz'

describe("NumeroFeliz", () => {
    describe("Somar o quadrado de 7", () => {
        it("Deve retornar o quadrado de 7 que é 49", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.somarQuadrado(7);
          expect(resultado).to.equal(49)
        })
      });

      describe("Somar o quadrado de 10", () => {
        it("Deve retornar a soma do quadrado de 10 que é 1", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.somarQuadrado(10);
          expect(resultado).to.equal(1)
        })
      });

      describe("Somar o quadrado de 97", () => {
        it("Deve retornar a soma do quadrado de 97 que é 130", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.somarQuadrado(97);
          expect(resultado).to.equal(130)
        })
      });

      describe("Somar o quadrado de 20", () => {
        it("Deve retornar a soma do quadrado de 20 que é 4", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.somarQuadrado(20);
          expect(resultado).to.equal(4)
        })
      });

      describe("Somar o quadrado de 4", () => {
        it("Deve retornar a soma do quadrado de 4 que é 16", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.somarQuadrado(4);
          expect(resultado).to.equal(16)
        })
      });

      describe("Definir se o numero 7 é feliz", () => {
        it("Deve retornar que o numero 7 é feliz", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.eFeliz(7);
          expect(resultado).to.equal("O numero é feliz")
        })
      });

      describe("Definir se o numero 130 é feliz", () => {
        it("Deve retornar que o numero 130 é feliz", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.eFeliz(130);
          expect(resultado).to.equal("O numero é feliz")
        })
      });

      describe("Definir se o numero 4599 é feliz", () => {
        it("Deve retornar que o numero 4599 é feliz", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.eFeliz(4599);
          expect(resultado).to.equal("O numero é feliz")
        })
      });

      describe("Definir se o numero 4 é feliz?", () => {
        it("Deve retornar que o numero 4 não é feliz", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.eFeliz(4);
          expect(resultado).to.equal("Numero não é feliz")
        })
      });
      describe("Definir se o numero 20 é feliz?", () => {
        it("Deve retornar que o numero 20 não é feliz", () => {
          let nf = new NumeroFeliz();
          let resultado = nf.eFeliz(20);
          expect(resultado).to.equal("Numero não é feliz")
        })
      });
});