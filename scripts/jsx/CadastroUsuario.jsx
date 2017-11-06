var CadastroUsuario = React.createClass({
	            getInitialState : function(){
	                return {
	                    logo : "logo-labs.png"
	                }
	            },
	            render : function(){
	                return (
								<div className="row col-md-12 text-center box-novo-usuario">
									<h2>Criar perfil</h2>

									<div className="row col-md-12">
										<div className="form-group text-left">
											Nome
											<input type="text" className="form-control" id="txtNome" />	
										</div>
									</div>

									<div className="row col-md-12">
										<div className="form-group text-left">
											Usuário
											<input type="text" className="form-control" id="txtUsuario" />	
										</div>
									</div>

									<div className="row  col-md-12">
										<div className="form-group text-left">
											E-mail
											<input type="text" className="form-control" id="txtEmail" />	
										</div>
									</div>
									<div className="row  col-md-12">
										<div className="form-group col-md-6 text-left label-senha">
											Senha
											<input type="password" className="form-control" id="txtSenha" />	
										</div>
										<div className="form-group col-md-6 text-left label-senha">
											Confirmar senha
											<input type="password" className="form-control" id="txtSenha2" />	
										</div>
									</div>
									<div className="row">

									</div>
									<div className="row">
										<div className="form-group col-md-12">
											<p><a className="btn btn-primary col-md-12" href="#" role="button" onclick="ValidarFormulario()">Salvar</a></p>
										</div>
									</div>
								</div>
	                )
	            }
	        })
	        React.render( <CadastroUsuario/>, document.getElementById('dvCadastroUsuario'))