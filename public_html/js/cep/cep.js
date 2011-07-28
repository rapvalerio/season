function getEndereco() {
	// Se o campo CEP n�o estiver vazio
	if($.trim($("#CEP").val()) != ""){
		//document.getElementById("load").style.display = 'block';
			/* 
					Para conectar no servi�o e executar o json, precisamos usar a fun��o
					getScript do jQuery, o getScript e o dataType:"jsonp" conseguem fazer o cross-domain, os outros
					dataTypes n�o possibilitam esta intera��o entre dom�nios diferentes
					Estou chamando a url do servi�o passando o par�metro "formato=javascript" e o CEP digitado no formul�rio
					http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#cep").val()
			*/
			$.getScript("http://cep.republicavirtual.com.br/web_cep.php?formato=javascript&cep="+$("#CEP").val(), function(){
					// o getScript d� um eval no script, ent�o � s� ler!
					//Se o resultado for igual a 1
					if(resultadoCEP["resultado"] && resultadoCEP["bairro"] != ""){
							// troca o valor dos elementos
							$("#Logradouro").val(unescape(resultadoCEP["tipo_logradouro"])+": "+unescape(resultadoCEP["logradouro"]));
							$("#Bairro").val(unescape(resultadoCEP["bairro"]));
							//$("#Cidade").val(unescape(resultadoCEP["cidade"]));
							//$("#estado").val(unescape(resultadoCEP["uf"]));
							//$("#enderecoCompleto").show("slow");
							$("#NumLogradouro").focus();
							//document.getElementById("load").style.display = 'none';
							//validate()
					}else{
							alert("Endere�o n�o encontrado");
							//$("#enderecoCompleto").show("slow");
							return false;
					}
			});                             
	}
    else
    {
        alert('Antes, preencha o campo CEP!')
		//document.getElementById("load").style.display = 'none';
    }
	
}

