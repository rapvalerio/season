<?php
/**
 */
class Zend_View_Helper_Orgaoexpeditor extends Zend_View_Helper_Abstract
{
    /**
     * M�todo Principal
     * @param string $value Valor para Formata��o
     * @param string $format Formato de Sa�da
     * @return string Valor Formatado
     */
    public function Orgaoexpeditor($nome){
		return '
		<select name="'.$nome.'" id="'.$nome.'">
			<option value="34" selected >SSP</option>

		</select>';
    }
}