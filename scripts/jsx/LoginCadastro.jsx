var LoginCadastro = React.createClass({
	            getInitialState : function(){
	                return {
	                    logo : "logo-labs.png"
	                }
	            },
	            render : function(){
	                return (
							<div className="row col-md-12 text-center box-novo-usuario">
					<h2>Já tem usuário?</h2>

					<div className="topo-login-cadastro">
						<div className="row col-md-12">
							<div className="col-md-3">
								&nbsp;
							</div>

							<div className="col-md-6">
								<div className="text-center">
									Usuário
									<input type="text" className="form-control" id="txtUsuario" />	
								</div>

								<div className="text-center">
									<div className="form-group label-senha">
										Senha
										<input type="password" className="form-control" id="txtSenha" />	
									</div>
								</div>	
							</div>

							<div className="col-md-3">
								&nbsp;
							</div>
						</div>

						<div className="row col-md-12">
							<div className="col-md-3">
								&nbsp;
							</div>

							<div className="col-md-6">
								<p><a className="btn btn-primary col-md-12" href="#" role="button" onclick="">Entrar</a></p>
							</div>
							
							<div className="col-md-3">
								&nbsp;
							</div>
							
						</div>	
					</div>
				</div>	
	                )
	            }
	        })
	        React.render( <LoginCadastro/>, document.getElementById('dvLoginCadastro'))


