<?php
/**
 * Formata��o de Datas
 * Auxiliar da Camada de Visualiza��o
 * @author Wanderson Henrique Camargo Rosa
 * @see APPLICATION_PATH/views/helpers/Date.php
 */
class Zend_View_Helper_DataSql extends Zend_View_Helper_Abstract
{
    /**
     * M�todo Principal
     * @param string $value Valor para Formata��o
     * @param string $format Formato de Sa�da
     * @return string Valor Formatado
     */
    public function dataSql($data){
		if($data != NULL){
			return date('Y-m-d',strtotime($data));
		}	   
    }
}