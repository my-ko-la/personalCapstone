
const Footer = () =>
{
    return (
        <>
            <div className="pt-6 h-fit bg-black"></div>            
                <div className="w-full bg-black font-poppins text-white h-full px-24 md:px-48">
                    <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-col">
                                <h1>Sign Up To Our Newsletter</h1>
                                <div className="py-1"></div>
                                <p className="text-xs font-extralight">Be the first to hear about the latest offers.</p>
                            </div>
                            <div className="flex flex-row gap-4">
                                <input className="bg-black border-x border-y rounded-sm font-light pl-2 text-xs p-1 w-96" type="text" placeholder="Your Email" />
                                <button className="text-sm bg-blue-600 rounded-3xl w-32 p-2">Subscribe</button>
                            </div>
                    </div>
                    <div className="py-6"></div>
                    <div className="flex flex-row text-sm text-gray-500 justify-between">
                        <p className="w-52">Information</p>
                        <p className="w-52">PC Parts</p>
                        <p className="w-52">Desktop PCs</p>
                        <p className="w-52">Laptops</p>
                        <p className="w-52">Address</p>
                    </div>
                    <div className="py-2"></div>
                    <div className="flex flex-row font-light text-xs justify-between">
                        <div className="flex flex-col w-52 leading-5">
                            <a href="">About Us</a>
                            <a href="">About Zip</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Search</a>
                            <a href="">Terms</a>
                            <a href="">Orders and Returns</a>
                            <a href="">Contact Us</a>
                            <a href="">Advanced Search</a>
                            <a href="">Newsletter Subscription</a>
                        </div>
                        <div className="flex flex-col w-52 leading-5">
                            <a href="">CPUs</a>
                            <a href="">Add On Cards</a>
                            <a href="">Hard Drives (Internal)</a>
                            <a href="">Graphic Cards</a>
                            <a href="">Keyboards / Mice</a>
                            <a href="">Cases / Power Supplies / Cooling</a>
                            <a href="">RAM (Memory)</a>
                            <a href="">Software</a>
                            <a href="">Speakers / Headsets</a>
                            <a href="">Motherboards</a>
                        </div>
                        <div className="flex flex-col w-52 leading-5">
                            <a href="">Custom PCs</a>
                            <a href="">Servers</a>
                            <a href="">MSI All-In-One PCs</a>
                            <a href="">HP/Compaq PCs</a>
                            <a href="">ASUS Pcs</a>
                            <a href="">Tecs PCs</a>
                        </div>
                        <div className="flex flex-col w-52 leading-5">
                            <a href="">Everyday Use Notebooks</a>
                            <a href="">MSI Workstation Series</a>
                            <a href="">MSI Prestige Series</a>
                            <a href="">Tablets and Pads</a>
                            <a href="">Netbooks</a>
                            <a href="">Infinity Gaming Notebooks</a>
                        </div>
                        <div className="flex flex-col w-52 leading-5">
                            <p>Address: 1234 Street Address City, 1234</p> 
                            <p>Phones: <a className="text-blue-500" href="">(00) 1234 5678</a></p>
                            <p>We are open: Mo-Thu: 9:00 AM - 5:30 PM</p>
                            <p>Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 11:00 AM - 5:00 PM</p>
                            <p>E-mail: <a className="text-blue-500"href="">shop@email.com</a></p>
                        </div>
                    </div>
                    <div className="py-3"></div>
                    <hr style={{color:"gray"}} />
                    <div className="flex flex-row py-3 relative">
                        <div className="flex flex-row gap-3 absolute left-0">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.8155 0.504395H1.18356C0.807625 0.504395 0.503906 0.808113 0.503906 1.18404V16.816C0.503906 17.1919 0.807625 17.4956 1.18356 17.4956H16.8155C17.1914 17.4956 17.4951 17.1919 17.4951 16.816V1.18404C17.4951 0.808113 17.1914 0.504395 16.8155 0.504395ZM14.853 5.46371H13.4958C12.4318 5.46371 12.2257 5.9692 12.2257 6.71257V8.3501H14.7659L14.4346 10.9137H12.2257V17.4956H9.57723V10.9158H7.362V8.3501H9.57723V6.45983C9.57723 4.26583 10.9174 3.07007 12.8757 3.07007C13.8144 3.07007 14.6194 3.14016 14.8551 3.17202V5.46371H14.853Z" fill="gray"/>
                            </svg>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99986 6.13619C7.4229 6.13619 6.13599 7.4231 6.13599 9.00005C6.13599 10.577 7.4229 11.8639 8.99986 11.8639C10.5768 11.8639 11.8637 10.577 11.8637 9.00005C11.8637 7.4231 10.5768 6.13619 8.99986 6.13619ZM17.5893 9.00005C17.5893 7.81411 17.6001 6.63892 17.5335 5.45513C17.4669 4.08013 17.1532 2.85982 16.1477 1.85435C15.1401 0.846733 13.9219 0.535209 12.5469 0.468608C11.361 0.402006 10.1858 0.412748 9.00201 0.412748C7.81607 0.412748 6.64087 0.402006 5.45709 0.468608C4.08208 0.535209 2.86177 0.848881 1.8563 1.85435C0.848686 2.86197 0.537162 4.08013 0.470561 5.45513C0.403959 6.64107 0.414702 7.81626 0.414702 9.00005C0.414702 10.1838 0.403959 11.3612 0.470561 12.545C0.537162 13.92 0.850834 15.1403 1.8563 16.1458C2.86392 17.1534 4.08208 17.4649 5.45709 17.5315C6.64302 17.5981 7.81822 17.5874 9.00201 17.5874C10.1879 17.5874 11.3631 17.5981 12.5469 17.5315C13.9219 17.4649 15.1422 17.1512 16.1477 16.1458C17.1553 15.1381 17.4669 13.92 17.5335 12.545C17.6022 11.3612 17.5893 10.186 17.5893 9.00005ZM8.99986 13.4065C6.56138 13.4065 4.59341 11.4385 4.59341 9.00005C4.59341 6.56158 6.56138 4.59361 8.99986 4.59361C11.4383 4.59361 13.4063 6.56158 13.4063 9.00005C13.4063 11.4385 11.4383 13.4065 8.99986 13.4065ZM13.5868 5.44224C13.0174 5.44224 12.5577 4.98247 12.5577 4.41314C12.5577 3.8438 13.0174 3.38404 13.5868 3.38404C14.1561 3.38404 14.6159 3.8438 14.6159 4.41314C14.616 4.54833 14.5895 4.68223 14.5379 4.80716C14.4862 4.93209 14.4104 5.04561 14.3148 5.1412C14.2192 5.2368 14.1057 5.31259 13.9808 5.36425C13.8559 5.41591 13.722 5.44241 13.5868 5.44224Z" fill="gray"/>
                            </svg>
                        </div>
                        <div className="flex justify-center grow">
<svg width="210" height="22" viewBox="0 0 210 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_73_4101)">
<path d="M45.0293 2.76611C45.0293 1.2503 46.2722 0.0214844 47.8055 0.0214844H75.5672C77.1005 0.0214844 78.3434 1.2503 78.3434 2.76611V19.2339C78.3434 20.7497 77.1005 21.9785 75.5672 21.9785H47.8055C46.2722 21.9785 45.0293 20.7497 45.0293 19.2339V2.76611Z" fill="#D8E3F3"/>
<path d="M73.7006 6.9043H71.9554C71.4278 6.9043 71.0219 7.0648 70.7784 7.58644L67.4502 15.09H69.8043C69.8043 15.09 70.2101 14.0869 70.2913 13.8461C70.5348 13.8461 72.8483 13.8461 73.173 13.8461C73.2542 14.127 73.4571 15.0499 73.4571 15.0499H75.5677L73.7006 6.9043ZM70.9407 12.1608C71.1436 11.6793 71.8336 9.87363 71.8336 9.87363C71.8336 9.91376 72.0366 9.39212 72.1177 9.11123L72.2801 9.8335C72.2801 9.8335 72.7265 11.7997 72.8077 12.2009H70.9407V12.1608Z" fill="#3362AB"/>
<path d="M67.6126 12.4035C67.6126 14.0888 66.0702 15.2124 63.6756 15.2124C62.6609 15.2124 61.6868 15.0117 61.1592 14.771L61.4839 12.9252L61.768 13.0456C62.4986 13.3666 62.9856 13.4869 63.8785 13.4869C64.5279 13.4869 65.2179 13.2462 65.2179 12.6844C65.2179 12.3233 64.9338 12.0825 64.0409 11.6813C63.1885 11.28 62.0521 10.638 62.0521 9.47434C62.0521 7.86929 63.635 6.78589 65.8673 6.78589C66.7196 6.78589 67.4502 6.94639 67.8967 7.14702L67.572 8.91257L67.4096 8.75207C67.0038 8.59156 66.4761 8.43106 65.705 8.43106C64.8526 8.47119 64.4468 8.83232 64.4468 9.15333C64.4468 9.51446 64.9338 9.79535 65.705 10.1565C67.0038 10.7584 67.6126 11.4405 67.6126 12.4035Z" fill="#3362AB"/>
<path d="M47.8057 6.98594L47.8463 6.82544H51.3368C51.8238 6.82544 52.1891 6.98594 52.3109 7.50758L53.082 11.1189C52.3109 9.19288 50.525 7.62796 47.8057 6.98594Z" fill="#F9B50B"/>
<path d="M57.9932 6.90585L54.4621 15.0515H52.0675L50.0381 8.23001C51.4992 9.15291 52.7169 10.5975 53.1633 11.6006L53.4068 12.4433L55.5986 6.86572H57.9932V6.90585Z" fill="#3362AB"/>
<path d="M58.9264 6.86572H61.1587L59.7382 15.0515H57.5059L58.9264 6.86572Z" fill="#3362AB"/>
</g>
<g clip-path="url(#clip1_73_4101)">
<path d="M0.958008 2.76611C0.958008 1.2503 2.22919 0.0214844 3.79728 0.0214844H32.19C33.7581 0.0214844 35.0292 1.2503 35.0292 2.76611V19.2339C35.0292 20.7497 33.7581 21.9785 32.19 21.9785H3.79728C2.22919 21.9785 0.958008 20.7497 0.958008 19.2339V2.76611Z" fill="#CCDEFF"/>
<path d="M8.60292 7.92412C8.24704 7.68763 7.78265 7.56909 7.20975 7.56909H4.99178C4.81615 7.56909 4.71912 7.654 4.70069 7.82365L3.7997 13.2908C3.79034 13.3445 3.80424 13.3936 3.84127 13.4383C3.87809 13.483 3.9244 13.5053 3.97987 13.5053H5.03339C5.21817 13.5053 5.31973 13.4206 5.33838 13.2507L5.58786 11.7768C5.59697 11.7053 5.62947 11.6472 5.68493 11.6025C5.74035 11.5579 5.80967 11.5287 5.89285 11.5153C5.97602 11.502 6.05445 11.4953 6.12852 11.4953C6.20237 11.4953 6.29012 11.4999 6.39194 11.5088C6.49351 11.5177 6.55825 11.522 6.586 11.522C7.38072 11.522 8.00451 11.3056 8.45742 10.8721C8.91011 10.439 9.13672 9.83825 9.13672 9.06978C9.13672 8.54272 8.95863 8.16087 8.60292 7.924V7.92412ZM7.45936 9.56575C7.41301 9.87848 7.29301 10.0838 7.09895 10.1821C6.90485 10.2806 6.62761 10.3296 6.26724 10.3296L5.80976 10.3429L6.04547 8.90906C6.06386 8.81088 6.1239 8.76173 6.22563 8.76173H6.4891C6.85858 8.76173 7.12675 8.81322 7.2931 8.91578C7.45936 9.01859 7.51483 9.2353 7.45936 9.56575Z" fill="#003087"/>
<path d="M32.0086 7.56909H30.9829C30.881 7.56909 30.821 7.61824 30.8027 7.71659L29.9016 13.2911L29.8877 13.3179C29.8877 13.3628 29.9062 13.405 29.9432 13.4452C29.98 13.4854 30.0264 13.5055 30.0818 13.5055H30.9968C31.1721 13.5055 31.2692 13.4208 31.288 13.2509L32.189 7.7702V7.75689C32.1889 7.63176 32.1287 7.56926 32.0086 7.56926V7.56909Z" fill="#009CDE"/>
<path d="M19.6159 9.72787C19.6159 9.68331 19.5973 9.6408 19.5606 9.6007C19.5235 9.56052 19.4819 9.54028 19.4358 9.54028H18.3684C18.2666 9.54028 18.1834 9.58517 18.1188 9.67426L16.6495 11.7648L16.0395 9.75474C15.9931 9.61192 15.8916 9.54028 15.7346 9.54028H14.6947C14.6484 9.54028 14.6068 9.56044 14.5701 9.6007C14.533 9.6408 14.5146 9.68339 14.5146 9.72787C14.5146 9.74586 14.6048 10.0093 14.7849 10.5185C14.9651 11.0279 15.1592 11.5773 15.3671 12.1669C15.5751 12.7565 15.6836 13.0693 15.6929 13.1047C14.935 14.1054 14.5563 14.6414 14.5563 14.7128C14.5563 14.829 14.6162 14.887 14.7365 14.887H15.8038C15.9055 14.887 15.9886 14.8424 16.0534 14.7531L19.5884 9.82163C19.6067 9.80394 19.6159 9.77281 19.6159 9.72783V9.72787Z" fill="#003087"/>
<path d="M29.556 9.53838H28.5024C28.3729 9.53838 28.2946 9.68583 28.2669 9.98069C28.0263 9.62345 27.5876 9.44458 26.9498 9.44458C26.2845 9.44458 25.7184 9.68583 25.2518 10.1682C24.785 10.6507 24.5518 11.2181 24.5518 11.8702C24.5518 12.3974 24.7112 12.8172 25.0299 13.1297C25.3488 13.4426 25.7761 13.5988 26.3123 13.5988C26.5803 13.5988 26.8529 13.5451 27.1301 13.438C27.4073 13.3308 27.6243 13.1879 27.7817 13.0092C27.7817 13.0181 27.7723 13.0582 27.754 13.1296C27.7353 13.2012 27.7262 13.255 27.7262 13.2904C27.7262 13.4335 27.7861 13.5048 27.9065 13.5048H28.863C29.0384 13.5048 29.1402 13.4201 29.1678 13.2502L29.7363 9.75276C29.7454 9.6991 29.7316 9.65007 29.6946 9.60534C29.6575 9.56078 29.6114 9.53838 29.556 9.53838ZM27.747 12.1784C27.5113 12.4017 27.2271 12.5133 26.8944 12.5133C26.6263 12.5133 26.4093 12.442 26.2429 12.2989C26.0765 12.1563 25.9933 11.9598 25.9933 11.7093C25.9933 11.379 26.1088 11.0996 26.34 10.8718C26.5707 10.644 26.8575 10.5302 27.1994 10.5302C27.4579 10.5302 27.6728 10.6038 27.844 10.7512C28.0148 10.8986 28.1005 11.1019 28.1005 11.361C28.1004 11.6826 27.9826 11.9551 27.747 12.1784Z" fill="#009CDE"/>
<path d="M13.8081 9.53838H12.7545C12.6249 9.53838 12.5466 9.68583 12.5188 9.98069C12.2693 9.62345 11.8303 9.44458 11.2019 9.44458C10.5365 9.44458 9.97036 9.68583 9.50372 10.1682C9.03696 10.6507 8.80371 11.2181 8.80371 11.8702C8.80371 12.3974 8.96315 12.8172 9.282 13.1297C9.60084 13.4426 10.0282 13.5988 10.5642 13.5988C10.8229 13.5988 11.091 13.5451 11.3682 13.438C11.6455 13.3308 11.8673 13.1879 12.0336 13.0092C11.9965 13.1163 11.9782 13.2101 11.9782 13.2904C11.9782 13.4335 12.0382 13.5048 12.1584 13.5048H13.1148C13.2903 13.5048 13.3921 13.4201 13.4198 13.2502L13.9882 9.75276C13.9973 9.6991 13.9834 9.65007 13.9466 9.60534C13.9096 9.56078 13.8635 9.53838 13.8081 9.53838ZM11.999 12.185C11.7633 12.4041 11.4744 12.5133 11.1327 12.5133C10.8645 12.5133 10.6496 12.442 10.488 12.2989C10.3262 12.1563 10.2454 11.9598 10.2454 11.7093C10.2454 11.379 10.3609 11.0996 10.592 10.8718C10.8229 10.644 11.1094 10.5301 11.4515 10.5301C11.7101 10.5301 11.925 10.6038 12.0961 10.7512C12.267 10.8986 12.3525 11.1019 12.3525 11.361C12.3525 11.6916 12.2347 11.9663 11.999 12.185Z" fill="#003087"/>
<path d="M24.3501 7.92412C23.9942 7.68763 23.53 7.56909 22.9569 7.56909H20.7528C20.5679 7.56909 20.4662 7.654 20.4478 7.82365L19.5468 13.2908C19.5374 13.3445 19.5513 13.3936 19.5884 13.4383C19.625 13.483 19.6715 13.5053 19.7269 13.5053H20.8636C20.9745 13.5053 21.0484 13.4473 21.0854 13.3311L21.335 11.7768C21.3442 11.7053 21.3765 11.6472 21.432 11.6025C21.4875 11.5579 21.5567 11.5287 21.64 11.5153C21.7231 11.502 21.8015 11.4953 21.8756 11.4953C21.9495 11.4953 22.0372 11.4999 22.139 11.5088C22.2406 11.5177 22.3055 11.522 22.333 11.522C23.1279 11.522 23.7516 11.3056 24.2045 10.8721C24.6573 10.439 24.8837 9.83825 24.8837 9.06978C24.8838 8.54272 24.7058 8.16082 24.3501 7.924V7.92412ZM22.9292 10.1285C22.7259 10.2625 22.4209 10.3294 22.0143 10.3294L21.5707 10.3429L21.8063 8.90898C21.8247 8.81084 21.8847 8.76161 21.9865 8.76161H22.2359C22.4393 8.76161 22.601 8.77058 22.7213 8.7884C22.8412 8.80634 22.9569 8.86208 23.0678 8.95584C23.1788 9.04967 23.2342 9.18598 23.2342 9.36456C23.2342 9.73991 23.1324 9.99439 22.9292 10.1285Z" fill="#009CDE"/>
</g>
<g clip-path="url(#clip2_73_4101)">
<path d="M88.3438 2.76611C88.3438 1.2503 89.5867 0.0214844 91.1199 0.0214844H118.882C120.415 0.0214844 121.658 1.2503 121.658 2.76611V19.2339C121.658 20.7497 120.415 21.9785 118.882 21.9785H91.1199C89.5867 21.9785 88.3438 20.7497 88.3438 19.2339V2.76611Z" fill="#CCEFFF"/>
<path d="M108.645 17.4758H101.358V4.52905H108.645V17.4758Z" fill="#6C6BBD"/>
<path d="M101.825 11C101.825 8.37369 103.069 6.03424 105.005 4.5266C103.589 3.42414 101.801 2.76612 99.8587 2.76612C95.2595 2.76612 91.5312 6.4525 91.5312 11C91.5312 15.5475 95.2595 19.2339 99.8587 19.2339C101.801 19.2339 103.589 18.5759 105.005 17.4734C103.069 15.9658 101.825 13.6263 101.825 11Z" fill="#EB001B"/>
<path d="M118.472 11C118.472 15.5475 114.744 19.2339 110.144 19.2339C108.202 19.2339 106.414 18.5759 104.997 17.4734C106.935 15.9658 108.178 13.6263 108.178 11C108.178 8.37369 106.935 6.03424 104.997 4.5266C106.414 3.42414 108.202 2.76612 110.144 2.76612C114.744 2.76612 118.472 6.4525 118.472 11Z" fill="#0099DF"/>
</g>
<g clip-path="url(#clip3_73_4101)">
<path d="M131.657 2.76611C131.657 1.2503 132.928 0.0214844 134.496 0.0214844H162.889C164.457 0.0214844 165.728 1.2503 165.728 2.76611V19.2339C165.728 20.7497 164.457 21.9785 162.889 21.9785H134.496C132.928 21.9785 131.657 20.7497 131.657 19.2339V2.76611Z" fill="#FCE0CF"/>
<path d="M151.943 10.9854C151.946 10.3955 151.717 9.80471 151.256 9.35953C150.795 8.91343 150.182 8.69243 149.571 8.69598C149.568 8.69598 149.565 8.6958 149.562 8.6958C148.234 8.6958 147.181 9.71374 147.181 10.9977C147.181 12.2691 148.247 13.2995 149.562 13.2995C150.89 13.2995 151.943 12.2814 151.943 10.9977C151.943 10.9935 151.943 10.9895 151.943 10.9854Z" fill="#F26E21"/>
<path d="M146.739 11.9721C146.383 12.3165 146.055 12.4511 145.701 12.4584C144.839 12.4509 144.205 11.8338 144.205 10.954C144.205 10.5112 144.379 10.1482 144.653 9.83814C144.911 9.60166 145.243 9.44886 145.625 9.44886C146.037 9.44886 146.358 9.58164 146.724 9.93579V8.91766C146.358 8.74068 146.037 8.6521 145.625 8.6521C145.043 8.69232 144.494 8.91969 144.073 9.27671C143.951 9.38225 143.835 9.49875 143.737 9.63208C143.429 10.0174 143.243 10.4892 143.243 10.9985C143.243 12.282 144.297 13.2559 145.625 13.2559C145.631 13.2559 145.638 13.2554 145.644 13.2553C145.653 13.2554 145.662 13.2559 145.67 13.2559C146.037 13.2559 146.358 13.1676 146.77 12.9905L146.739 11.9721C146.724 11.987 146.754 12.0009 146.739 12.0151V11.9721Z" fill="#2B2B2B"/>
<path d="M154.95 9.28646L153.913 11.7512L152.722 8.82935H151.761L153.638 13.3004H154.142L156.111 8.82935H155.15L154.95 9.28646Z" fill="#2B2B2B"/>
<path d="M156.478 10.7772V13.1678H158.951H158.996V12.4593H158.218H157.393V11.6627V11.2644H158.951V10.5116H157.393V9.58203H158.996V8.82935H156.478V10.7772Z" fill="#2B2B2B"/>
<path d="M135.779 8.83032H134.496V13.1688H135.779C136.465 13.1688 136.969 12.9916 137.381 12.6817C137.885 12.2833 138.205 11.6637 138.205 10.9998C138.206 9.71566 137.244 8.83032 135.779 8.83032ZM136.832 12.1064C136.557 12.3276 136.191 12.4603 135.641 12.4603H135.366V9.58294H135.595C136.145 9.58294 136.511 9.67146 136.786 9.93697C137.106 10.2024 137.29 10.6011 137.29 10.9996C137.336 11.398 137.152 11.8405 136.832 12.1064Z" fill="#2B2B2B"/>
<path d="M139.488 8.8291H138.618V13.1675H139.488V8.8291Z" fill="#2B2B2B"/>
<path d="M141.686 10.5121C141.137 10.3351 140.999 10.2022 140.999 9.98093C140.999 9.71531 141.274 9.494 141.641 9.494C141.915 9.494 142.144 9.58258 142.373 9.84821L142.831 9.27276C142.465 8.96275 142.007 8.78589 141.503 8.78589C140.725 8.78589 140.083 9.31714 140.083 10.0252C140.083 10.6451 140.359 10.9107 141.183 11.2205C141.549 11.3531 141.686 11.3976 141.778 11.4861C141.961 11.5745 142.053 11.7517 142.053 11.9286C142.053 12.2828 141.778 12.5485 141.366 12.5485C140.953 12.5485 140.587 12.3272 140.404 11.973L139.854 12.5042C140.267 13.0797 140.771 13.3452 141.412 13.3452C142.328 13.3452 142.968 12.7698 142.968 11.9286C142.968 11.1762 142.694 10.8663 141.686 10.5121Z" fill="#2B2B2B"/>
<path d="M161.47 11.3526C162.156 11.22 162.523 10.7771 162.523 10.1133C162.523 9.31658 161.927 8.82935 160.92 8.82935H159.592V13.1678H160.462V11.4412H160.599L161.836 13.1678H162.889L161.47 11.3526ZM160.737 10.8213H160.462V9.49344H160.737C161.286 9.49344 161.607 9.71469 161.607 10.1577C161.607 10.6001 161.286 10.8213 160.737 10.8213Z" fill="#2B2B2B"/>
</g>
<g clip-path="url(#clip4_73_4101)">
<path d="M175.729 2.76611C175.729 1.2503 176.971 0.0214844 178.505 0.0214844H206.266C207.8 0.0214844 209.043 1.2503 209.043 2.76611V19.2339C209.043 20.7497 207.8 21.9785 206.266 21.9785H178.505C176.971 21.9785 175.729 20.7497 175.729 19.2339V2.76611Z" fill="#D4DEF7"/>
<path d="M200.313 6.79437L199.669 8.19921H200.962L200.313 6.79437ZM192.875 7.66492C192.997 7.60791 193.068 7.4839 193.068 7.3299C193.068 7.17899 192.993 7.0697 192.872 7.01834C192.761 6.9614 192.591 6.95483 192.428 6.95483H191.274V7.73757H192.412C192.594 7.73761 192.747 7.73521 192.875 7.66492ZM178.098 6.79437L177.461 8.19921H178.74L178.098 6.79437ZM207.77 15.7942H205.961V15.0383H207.763C207.941 15.0383 208.066 15.0173 208.142 14.951C208.213 14.8919 208.253 14.8085 208.252 14.7212C208.252 14.6185 208.207 14.5369 208.138 14.4881C208.07 14.4343 207.971 14.4098 207.808 14.4098C206.929 14.3829 205.831 14.4342 205.831 13.3188C205.831 12.8076 206.192 12.2695 207.175 12.2695H209.041V11.5682H207.308C206.784 11.5682 206.404 11.6808 206.135 11.8561V11.5682H203.572C203.162 11.5682 202.681 11.6596 202.453 11.8561V11.5682H197.875V11.8561C197.511 11.6197 196.896 11.5682 196.612 11.5682H193.592V11.8561C193.304 11.605 192.663 11.5682 192.272 11.5682H188.893L188.12 12.3209L187.395 11.5682H182.347V16.4868H187.3L188.097 15.722L188.847 16.4868L191.901 16.4893V15.3322H192.201C192.606 15.338 193.084 15.3233 193.505 15.1594V16.4867H196.024V15.2047H196.145C196.3 15.2047 196.316 15.2105 196.316 15.3498V16.4864H203.966C204.452 16.4864 204.959 16.3747 205.241 16.1716V16.4864H207.667C208.172 16.4864 208.665 16.4227 209.041 16.2598V15.3435C208.813 15.6427 208.37 15.7944 207.77 15.7944L207.77 15.7942ZM192.241 14.6328H191.072V15.815H189.252L188.099 14.6482L186.901 15.815H183.191V12.2903H186.958L188.11 13.4457L189.301 12.2903H192.294C193.037 12.2903 193.872 12.4754 193.872 13.4515C193.872 14.4307 193.06 14.6328 192.241 14.6328ZM197.86 14.473C197.992 14.645 198.011 14.8056 198.015 15.1163V15.8151H197.075V15.3741C197.075 15.1621 197.098 14.8481 196.924 14.6842C196.787 14.5579 196.578 14.5278 196.236 14.5278H195.236V15.8151H194.295V12.2903H196.457C196.931 12.2903 197.276 12.3093 197.584 12.4566C197.879 12.6172 198.065 12.8373 198.065 13.2394C198.065 13.8019 197.648 14.0889 197.401 14.1771C197.61 14.2463 197.78 14.3703 197.86 14.473ZM201.729 13.0192H199.536V13.66H201.675V14.3792H199.536V15.0805L201.729 15.0837V15.815H198.603V12.2903H201.729V13.0192ZM204.135 15.815H202.311V15.0592H204.128C204.306 15.0592 204.432 15.038 204.511 14.9718C204.575 14.9173 204.621 14.8381 204.621 14.7421C204.621 14.6393 204.571 14.5577 204.507 14.5088C204.435 14.4551 204.336 14.4308 204.173 14.4308C203.298 14.4038 202.201 14.455 202.201 13.3397C202.201 12.8284 202.558 12.2903 203.54 12.2903H205.417V13.0404H203.699C203.529 13.0404 203.418 13.0463 203.324 13.1042C203.221 13.1613 203.183 13.246 203.183 13.3577C203.183 13.4907 203.27 13.5812 203.388 13.6203C203.487 13.6512 203.593 13.6602 203.753 13.6602L204.257 13.6726C204.765 13.6836 205.114 13.7628 205.326 13.956C205.509 14.1257 205.607 14.34 205.607 14.7027C205.606 15.461 205.08 15.815 204.135 15.815ZM196.872 13.0761C196.759 13.0156 196.592 13.0124 196.425 13.0124H195.272V13.804H196.41C196.592 13.804 196.747 13.7982 196.872 13.7314C196.993 13.6654 197.066 13.5438 197.066 13.3931C197.066 13.2423 196.993 13.1332 196.872 13.0761ZM207.336 13.0123C207.165 13.0123 207.052 13.0182 206.957 13.076C206.858 13.1332 206.82 13.2178 206.82 13.3296C206.82 13.4625 206.903 13.553 207.025 13.5922C207.123 13.6231 207.229 13.6322 207.385 13.6322L207.893 13.6443C208.405 13.6557 208.747 13.735 208.956 13.9282C208.994 13.9549 209.017 13.9851 209.043 14.0153V13.0124H207.336L207.336 13.0123ZM192.273 13.0123H191.052V13.9101H192.263C192.622 13.9101 192.846 13.7495 192.846 13.4446C192.846 13.1363 192.612 13.0123 192.273 13.0123ZM184.124 13.0123V13.6532H186.18V14.3724H184.124V15.0736H186.426L187.496 14.0396L186.472 13.0123H184.124ZM190.136 15.4773V12.6514L188.698 14.0416L190.136 15.4773ZM184.202 9.81806V10.4254H192.027L192.023 9.14056H192.174C192.28 9.14389 192.311 9.15267 192.311 9.31012V10.4254H196.358V10.1263C196.684 10.2836 197.192 10.4254 197.86 10.4254H199.563L199.927 9.64273H200.735L201.091 10.4254H204.372V9.68194L204.868 10.4254H207.498V5.51074H204.896V6.09117L204.531 5.51074H201.862V6.09117L201.527 5.51074H197.921C197.317 5.51074 196.787 5.58652 196.358 5.79773V5.51074H193.869V5.79773C193.596 5.58002 193.225 5.51074 192.812 5.51074H183.72L183.11 6.78018L182.483 5.51074H179.62V6.09117L179.305 5.51074H176.863L175.729 7.84755V9.71674L177.406 6.19277H178.797L180.39 9.52923V6.19277H181.918L183.144 8.58334L184.27 6.19277H185.829V9.71674H184.869L184.866 6.95683L183.508 9.71674H182.685L181.324 6.95439V9.71674H179.419L179.059 8.93071H177.109L176.746 9.71674H175.729V10.4257H177.329L177.69 9.64293H178.497L178.857 10.4257H182.006V9.8272L182.287 10.4282H183.921L184.202 9.81818L184.202 9.81806ZM196.532 6.60353C196.834 6.32227 197.309 6.19257 197.954 6.19257H198.861V6.94765H197.973C197.631 6.94765 197.438 6.99336 197.252 7.15646C197.093 7.3048 196.983 7.5853 196.983 7.95464C196.983 8.3322 197.067 8.60439 197.241 8.78221C197.385 8.92165 197.647 8.96395 197.893 8.96395H198.314L199.634 6.19269H201.037L202.623 9.52582V6.19273H204.049L205.695 8.64697V6.19273H206.654V9.71658H205.327L203.552 7.0717V9.71658H201.645L201.28 8.93055H199.335L198.981 9.71658H197.885C197.43 9.71658 196.854 9.62605 196.527 9.3268C196.198 9.02762 196.027 8.62231 196.027 7.98154C196.027 7.45884 196.129 6.98109 196.532 6.60353ZM194.605 6.19261H195.561V9.71658H194.605V6.19261ZM190.297 6.19261H192.451C192.93 6.19261 193.282 6.20404 193.585 6.36141C193.882 6.51881 194.059 6.74863 194.059 7.14162C194.059 7.70353 193.642 7.99377 193.399 8.08097C193.604 8.15114 193.779 8.27506 193.863 8.3777C193.995 8.55299 194.018 8.70956 194.018 9.02425V9.71655H193.073L193.07 9.27215C193.07 9.06005 193.092 8.7551 192.922 8.58567C192.785 8.46178 192.576 8.4348 192.239 8.4348H191.234V9.71658H190.297L190.297 6.19261ZM186.522 6.19261H189.65V6.92644H187.458V7.56164H189.598V8.28401H187.458V8.98777H189.65V9.71655H186.522V6.19261Z" fill="#2557D6"/>
</g>
<defs>
<clipPath id="clip0_73_4101">
<rect width="33.3141" height="21.957" fill="white" transform="translate(45.0293 0.0214844)"/>
</clipPath>
<clipPath id="clip1_73_4101">
<rect width="34.0712" height="21.957" fill="white" transform="translate(0.958008 0.0214844)"/>
</clipPath>
<clipPath id="clip2_73_4101">
<rect width="33.3141" height="21.957" fill="white" transform="translate(88.3438 0.0214844)"/>
</clipPath>
<clipPath id="clip3_73_4101">
<rect width="34.0712" height="21.957" fill="white" transform="translate(131.657 0.0214844)"/>
</clipPath>
<clipPath id="clip4_73_4101">
<rect width="33.3141" height="21.957" fill="white" transform="translate(175.729 0.0214844)"/>
</clipPath>
</defs>
</svg>

                        </div>
                        <p className="text-xs font-thin text-gray-400 absolute right-0">Copyright &#169; 2020 Shop Pty. Ltd.</p>
                    </div>
                </div>        
        </>
    )
}

export default Footer;