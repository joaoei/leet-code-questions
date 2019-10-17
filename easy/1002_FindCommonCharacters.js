/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let resp = [];
    // Ordenar as palavras por menor --> maior em questão de tamanho
    A.sort(function(a, b) {
      return a.length - b.length;
    });
    
    const letras = A[0].split('');
    
    // Para cada letra desta palavra verificar se existe nas outras
    for (let i = 0; i < letras.length; i++) {
        let comum = true;
        let novoArray = [A[0]];
        
        for (let j = 1; j < A.length; j++) {
            const tamanhoIni   = A[j].length;
            
            const novaPalavra  = A[j].replace(new RegExp('['+letras[i]+']'), '');
            const tamanhoFinal = novaPalavra.length;
            
            if (tamanhoIni != tamanhoFinal) {
                novoArray.push(novaPalavra);
            } else {
                comum = false;
                break;
            }
        }
        
        if (comum) {
            A = novoArray;
            resp.push(letras[i]);
        }
    }
    
    return resp;

};
