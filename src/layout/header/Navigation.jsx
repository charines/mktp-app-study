import React from "react";

function Navigation({baseUrl}){
  return (
    <>
      <li>
        <details>
          <summary className="py-7 px-4 text-black md:text-base font-semibold">Sobre</summary>
          <ul className="bg-base-100 py-6 px-5 absolute z-20 w-56 right-1/2 translate-x-1/2 md:right-0 border md:border-none top-full rounded-lg before:hidden">
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
          <summary className="py-7 px-4 text-black md:text-base font-semibold">Contratar</summary>
          <ul className="bg-base-100 py-6 px-5 absolute z-20 h-96 overflow-y-auto md:overflow-y-hidden left-1/2 -translate-x-1/2 top-full border rounded-lg before:hidden w-96 md:w-[47.9375rem]" >
            <li className="menu-title mb-2 text-primary text-xl relative after:content-[''] after:w-0.5 after:h-80 after:absolute after:left-36 after:ml-0 md:after:ml-1 after:bg-gray-50">
              Contratar
            </li>
            <div role="tablist" className="tabs tabs-bordered bg-transparent">
              <div className="flex gap-16 md:gap-20">
                <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 mb-1 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Para você" defaultChecked />
                <div role="tabpanel" className="tab-content">
                  <div className="flex flex-col md:flex-row gap-3 md:gap-0 h-0">
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
          
                    <div className="w-40 mt-0 md:-mt-11">
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
          
                    <div className="w-40 md:w-52 mt-0 md:-mt-11">
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

              <div className="flex gap-12 md:gap-16">
                <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 mb-1 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Para Escolas" />
                <div role="tabpanel" className="tab-content">
                  <div className="w-40 md:w-80 flex relative -top-20 h-0">
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

              <div className="flex gap-8 md:gap-12">
                <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 mb-1 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Para Empresas" />
                <div role="tabpanel" className="tab-content">
                  <div className="w-40 md:w-80 flex h-0 relative -top-28">
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

              <div className="flex gap-16 md:gap-20">
                <input type="radio" name="my_tabs_1" role="tab" className="tab px-3 hover:text-primary text-gray-50 text-base font-medium checked:text-primary" aria-label="Catálogos" />
                <div role="tabpanel" className="tab-content">
                  <div className="w-40 md:w-80 flex h-0 relative -top-36">
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
          <summary className="py-7 px-4 text-black md:text-base font-semibold">Franquias</summary>
          <ul className="bg-base-100 py-6 px-5 absolute z-20 w-56 right-1/2 translate-x-1/2 md:right-0 border md:border-none top-full rounded-lg before:hidden">
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
      <li className="py-7 px-4"><a href={`${baseUrl}/eventos`} className="p-0 text-black md:text-base font-semibold">Eventos</a></li>
      <li className="py-7 px-4"><a href={`${baseUrl}/blog`} className="p-0 text-black md:text-base font-semibold">Blog</a></li>
      <li>
        <details>
          <summary className="py-7 px-4 text-black md:text-base font-semibold">Lojas</summary>
          <ul className="bg-base-100 py-6 px-5 absolute z-20 w-56 right-1/2 translate-x-1/2 md:right-0 border md:border-none top-full rounded-lg before:hidden">
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
    </>
  )
};

export default Navigation;
