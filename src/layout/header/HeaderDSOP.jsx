import React from "react";
import LanguageSelector from "./LanguageSelector";
import SearchInput from "./SearchInput";
import LogoDsop from "../../assets/img/logo-dsop.webp";

function HeaderDSOP(){
  const baseUrl = 'https://dsop.com.br';

  return (
    <header className="bg-primary">
      <section className="py-3 pl-3 sm:pl-0">
        <div className="max-w-screen-xl mx-auto flex gap-3 justify-between items-center">
          <ul className="px-2 hidden sm:flex items-center flex-wrap gap-6">
            <li>
              <a href="https://www.instagram.com/dsop.oficial/" target="_blank" aria-label="Logo instagram">
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM18.7233 11.2773C20.0886 11.2152 20.5249 11.2 24.0012 11.2H23.9972C27.4746 11.2 27.9092 11.2152 29.2746 11.2773C30.6373 11.3397 31.5679 11.5555 32.384 11.872C33.2266 12.1987 33.9386 12.636 34.6506 13.348C35.3627 14.0595 35.8 14.7736 36.128 15.6155C36.4427 16.4294 36.6587 17.3595 36.7227 18.7222C36.784 20.0876 36.8 20.5238 36.8 24.0001C36.8 27.4764 36.784 27.9116 36.7227 29.277C36.6587 30.6391 36.4427 31.5695 36.128 32.3837C35.8 33.2253 35.3627 33.9394 34.6506 34.6509C33.9394 35.3629 33.2264 35.8013 32.3848 36.1283C31.5703 36.4448 30.6391 36.6605 29.2765 36.7229C27.9111 36.7851 27.4762 36.8003 23.9996 36.8003C20.5236 36.8003 20.0876 36.7851 18.7222 36.7229C17.3598 36.6605 16.4294 36.4448 15.615 36.1283C14.7736 35.8013 14.0595 35.3629 13.3483 34.6509C12.6365 33.9394 12.1992 33.2253 11.872 32.3834C11.5557 31.5695 11.34 30.6394 11.2773 29.2767C11.2155 27.9114 11.2 27.4764 11.2 24.0001C11.2 20.5238 11.216 20.0873 11.2771 18.7219C11.3384 17.3598 11.5544 16.4294 11.8717 15.6152C12.1997 14.7736 12.6371 14.0595 13.3491 13.348C14.0606 12.6363 14.7747 12.1989 15.6166 11.872C16.4305 11.5555 17.3606 11.3397 18.7233 11.2773Z" fill="white"></path>
                  <path fillRule="evenodd" clipRule="evenodd" d="M22.853 13.5066C23.0759 13.5063 23.3158 13.5064 23.5746 13.5065L24.0013 13.5066C27.4189 13.5066 27.824 13.5189 29.1736 13.5802C30.4216 13.6373 31.0989 13.8458 31.5501 14.021C32.1475 14.253 32.5733 14.5304 33.0211 14.9784C33.4691 15.4264 33.7464 15.853 33.979 16.4504C34.1542 16.9011 34.363 17.5784 34.4198 18.8264C34.4811 20.1758 34.4944 20.5811 34.4944 23.9971C34.4944 27.4132 34.4811 27.8185 34.4198 29.1678C34.3627 30.4159 34.1542 31.0932 33.979 31.5439C33.747 32.1412 33.4691 32.5665 33.0211 33.0143C32.5731 33.4623 32.1477 33.7396 31.5501 33.9716C31.0995 34.1476 30.4216 34.3556 29.1736 34.4127C27.8242 34.474 27.4189 34.4874 24.0013 34.4874C20.5834 34.4874 20.1783 34.474 18.8289 34.4127C17.5809 34.3551 16.9036 34.1466 16.4521 33.9714C15.8548 33.7394 15.4281 33.462 14.9801 33.014C14.5321 32.566 14.2548 32.1404 14.0222 31.5428C13.847 31.0921 13.6382 30.4148 13.5814 29.1668C13.5201 27.8174 13.5078 27.4121 13.5078 23.9939C13.5078 20.5758 13.5201 20.1726 13.5814 18.8232C13.6385 17.5752 13.847 16.8979 14.0222 16.4466C14.2542 15.8493 14.5321 15.4226 14.9801 14.9746C15.4281 14.5266 15.8548 14.2493 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5754C20.0097 13.5221 20.4674 13.5061 22.853 13.5034V13.5066ZM30.8339 15.632C29.9859 15.632 29.2978 16.3192 29.2978 17.1675C29.2978 18.0155 29.9859 18.7035 30.8339 18.7035C31.6819 18.7035 32.3699 18.0155 32.3699 17.1675C32.3699 16.3194 31.6819 15.6314 30.8339 15.6314V15.632ZM17.4279 24.0001C17.4279 20.37 20.3709 17.4268 24.001 17.4267C27.6312 17.4267 30.5736 20.3699 30.5736 24.0001C30.5736 27.6302 27.6314 30.5721 24.0013 30.5721C20.3711 30.5721 17.4279 27.6302 17.4279 24.0001Z" fill="white"></path>
                  <path d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6447 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6447 19.7334 24.0012 19.7334Z" fill="white"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCnl_GlGSio7pI1VtaGjV9xw" target="_blank" aria-label="Logo youtube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width="30" height="30">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM34.0016 15.7493C35.1031 16.0516 35.9706 16.9422 36.265 18.0732C36.8 20.123 36.8 24.4 36.8 24.4C36.8 24.4 36.8 28.6768 36.265 30.7268C35.9706 31.8578 35.1031 32.7484 34.0016 33.0508C32.0054 33.6 24 33.6 24 33.6C24 33.6 15.9946 33.6 13.9983 33.0508C12.8967 32.7484 12.0292 31.8578 11.7348 30.7268C11.2 28.6768 11.2 24.4 11.2 24.4C11.2 24.4 11.2 20.123 11.7348 18.0732C12.0292 16.9422 12.8967 16.0516 13.9983 15.7493C15.9946 15.2 24 15.2 24 15.2C24 15.2 32.0054 15.2 34.0016 15.7493Z" fill="#fff"></path><path d="M21.6 28.7998V20.7998L28 24.8L21.6 28.7998Z" fill="#fff"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/DSOPEducacaoFinanceira" target="_blank" aria-label="Logo facebook">
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5016 25.0542V38.1115H21.0991V25.0547H18.4V20.5551H21.0991V17.8536C21.0991 14.1828 22.6231 12 26.9532 12H30.5581V16.5001H28.3048C26.6192 16.5001 26.5077 17.1289 26.5077 18.3025L26.5016 20.5546H30.5836L30.1059 25.0542H26.5016Z" fill="#fff"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/dsopoficial/" target="_blank" aria-label="Logo linkedin">
                <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z" fill="#fff"></path>
                </svg>
              </a>
            </li>
          </ul>
          <SearchInput />
          <LanguageSelector />
        </div>
      </section>

      <nav className="max-w-screen-xl mx-auto flex items-center justify-between gap-0 md:gap-5 lg:gap-48 relative">
        <a href={baseUrl} className="header__menu__nav__logo">
          <img src={LogoDsop} alt="logo dsop" height="58" width="204" />
        </a>

        <div>
          <button className="mt-5 mb-4 bg-transparent block sm:hidden" id="menu__button" aria-label="botão menu">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="40" height="40" viewBox="0 0 24 24" className="pointer-events-none fill-white"
            >
              <path className="path_conteudo" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z">
              </path>
            </svg>
          </button>

          <ul tabIndex={0} className="menu menu-sm flex-row dropdown-content z-[1] p-0">
            <li>
              <details>
                <summary className="py-7 px-4 text-base font-semibold">Sobre</summary>
                <ul className="bg-base-100 py-6 px-5 absolute z-20 w-56 right-0 top-full rounded-lg before:hidden">
                  <li className="menu-title mb-2 text-primary text-xl">Sobre</li>
                  <li>
                    <a href={`${baseUrl}/alumni`} className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Alumni</a>
                  </li>
                  <li>
                    <a href={`${baseUrl}/sobre-a-dsop`} className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Quem Somos</a>
                  </li>
                  <li>
                    <a href={`${baseUrl}/politica-qualidade`} className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Política de Qualidade</a>
                  </li>
                  <li>
                    <a href={`${baseUrl}/contato`} className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Contato</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="py-7 px-4 text-base font-semibold">Contratar</summary>
                <ul className="bg-base-100 py-6 px-5 absolute z-20 w-fit h-96 left-1/2 -translate-x-1/2 top-full rounded-lg before:hidden" style={{width: "767px"}}>
                  <li className="menu-title mb-2 text-primary text-xl relative after:content-[''] after:w-0.5 after:h-80 after:absolute after:left-36 after:ml-1 after:bg-gray-50">
                    Contratar
                  </li>
                  <div role="tablist" className="tabs tabs-bordered bg-transparent">
                    <div className="flex gap-20">
                      <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 mb-1 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Para você" defaultChecked />
                      <div role="tabpanel" className="tab-content">
                        <div className="flex h-0">
                          <div className="w-44 -mt-11">
                            <h2 className="mb-4 pl-3 text-primary text-xl font-bold">Cursos</h2>
                            <ul className="before:hidden m-0 p-0 flex gap-1 flex-col">
                              <li>
                                <a href={`${baseUrl}/marketplace`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Cursos EAD
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/superior-de-tecnologia-em-educacao-financeira`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Graduação
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/pos-graduacao`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Pós-Graduação
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/mestrado`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Mestrado
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/doutorado`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Doutorado
                                </a>
                              </li>
                            </ul>
                          </div>
                
                          <div className="w-40 -mt-11">
                            <h2 className="mb-4 pl-3 text-primary text-xl font-bold">Conteúdo</h2>
                            <ul className="before:hidden m-0 p-0 flex gap-1 flex-col">
                              <li>
                                <a href="https://dflix.com.br/" target="_blank" className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  DFLIX
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/editora`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Editora
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/palestras`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Palestras
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/workshop`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Workshop
                                </a>
                              </li>
                              <li>
                                <a href="https://www.youtube.com/c/Dinheiro%C3%A0vista/videos" target="_blank" className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Dinheiro à vista
                                </a>
                              </li>
                              <li>
                                <a href="https://www.youtube.com/@TVDSOP" target="_blank" className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  TV DSOP
                                </a>
                              </li>
                            </ul>
                          </div>
                
                          <div className="w-52 -mt-11">
                            <h2 className="mb-4 pl-3 text-primary text-xl font-bold">Pessoal</h2>
                            <ul className="before:hidden m-0 p-0 flex gap-1 flex-col">
                              <li>
                                <a href="https://www.terapiafinanceira.com.br/" target="_blank" className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Terapia Financeira
                                </a>
                              </li>
                              <li>
                                <a href="https://crm.dsop.com.br/public/home" target="_blank" className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Teste de Perfil Financeiro
                                </a>
                              </li>
                              <li>
                                <a href={`${baseUrl}/mentoria`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                  Mentoria
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-16">
                      <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 mb-1 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Para Escolas" />
                      <div role="tabpanel" className="tab-content">
                        <div className="w-80 flex relative -top-20 h-0">
                          <ul className="before:hidden m-0 mt-1.5 p-0 flex gap-2 flex-col">
                            <li>
                              <a href={`${baseUrl}/educacional`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                Educacional
                              </a>
                            </li>
                            <li>
                              <a href={`${baseUrl}/escola-publica`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                Educacional para Escolas Públicas
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-12">
                      <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 mb-1 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Para Empresas" />
                      <div role="tabpanel" className="tab-content">
                        <div className="w-80 flex h-0 relative -top-28">
                          <ul className="before:hidden m-0 mt-1.5 p-0 flex gap-2 flex-col">
                            <li>
                              <a href={`${baseUrl}/in-company`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                In Company
                              </a>
                            </li>
                            <li>
                              <a href={`${baseUrl}/projetos-especiais`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                Projetos Especiais
                              </a>
                            </li>
                            <li>
                              <a href={`${baseUrl}/mentoria`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                Mentoria
                              </a>
                            </li>
                            <li>
                              <a href={`${baseUrl}/palestras`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                Palestras
                              </a>
                            </li>
                            <li>
                              <a href={`${baseUrl}/workshop`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                Workshop
                              </a>
                            </li>
                            <li>
                              <a href={`${baseUrl}/marketplace`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">
                                Marketplace
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-20">
                      <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Catálogos" />
                      <div role="tabpanel" className="tab-content">
                        <div className="w-80 flex h-0 relative -top-36">
                          <ul className="before:hidden m-0 mt-1 p-0 flex gap-1 flex-col">
                            <li><a href={`${baseUrl}/catalogos`} className="px-3 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Catálogos</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary className="py-7 px-4 text-base font-semibold">Franquias</summary>
                <ul className="bg-base-100 py-6 px-5 absolute z-20 w-56 right-0 top-full rounded-lg before:hidden">
                  <li className="menu-title mb-2 text-primary text-xl">Franquias</li>
                  <li>
                    <a href={`${baseUrl}/franquia`} className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Sobre a Franquia</a>
                  </li>
                  <li>
                    <a href={`${baseUrl}/socios-executivos`} className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Sócios-Executivos</a>
                  </li>
                </ul>
              </details>
            </li>
            <li className="py-7 px-4"><a href={`${baseUrl}/eventos`} className="p-0 text-base font-semibold">Eventos</a></li>
            <li className="py-7 px-4"><a href={`${baseUrl}/blog`} className="p-0 text-base font-semibold">Blog</a></li>
            <li>
              <details>
                <summary className="py-7 px-4 text-base font-semibold">Lojas</summary>
                <ul className="bg-base-100 py-6 px-5 absolute z-20 w-56 right-0 top-full rounded-lg before:hidden">
                  <li className="menu-title mb-2 text-primary text-xl">Lojas</li>
                  <li>
                    <a href="https://www.loopi.toys/" target="_blank" className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Loopi Toys</a>
                  </li>
                  <li>
                    <a href="https://www.lojadsop.com.br/" target="_blank" className="py-2 hover:bg-orange-50 hover:text-primary text-gray-50 text-base font-medium">Loja Online</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
};

export default HeaderDSOP;
