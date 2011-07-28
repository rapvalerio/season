<?php
/**
 * Formata��o de Datas
 * Auxiliar da Camada de Visualiza��o
 * @author Wanderson Henrique Camargo Rosa
 * @see APPLICATION_PATH/views/helpers/Date.php
 */
class Zend_View_Helper_Status extends Zend_View_Helper_Abstract
{
    /**
     * M�todo Principal
     * @param string $value Valor para Formata��o
     * @param string $format Formato de Sa�da
     * @return string Valor Formatado
     */
    public function Status($status){
		if($status == 1){
			return "Inclusao";
		}
		if($status == 2){
			return "Alteracao";
		}
		if($status == 3){
			return "Suspensao";
		}
	   
    }
}