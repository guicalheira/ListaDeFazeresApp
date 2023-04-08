import React, {Component} from "react";
import PageHeader from "../template/pageHeader";

export default  props => (
        <div>
            <PageHeader name ="Sobre" small="Nós"></PageHeader>
             <h2>Oque sou ?</h2>
             <p>Sou um aplicativo de gerenciamento de tarefas feito com o intuito de ajudar meus usuários a organizar suas tarefas</p>
             <h2>Quem me criou ?</h2>
             <p>Fui criado por Guilherme Calheira de Almeida</p>
             <h2>Contato</h2>
             <p>Github:<a href="https://github.com/guicalheira">https://github.com/guicalheira</a></p>
             <p>Linkedin:<a href="https://www.linkedin.com/in/guilherme-calheira-de-almeida-9bb9bb254/">https://www.linkedin.com/in/guilherme-calheira-de-almeida-9bb9bb254/</a></p>
        </div>
)