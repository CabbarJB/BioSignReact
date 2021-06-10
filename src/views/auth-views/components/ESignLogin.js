import React, {Component} from 'react';

class ESignLogin extends Component {

    onLogin = () => {

    }

    render() {
        return (
            <div className={'esign-login-wrapper'}>
                <div className="esign-login-title text-center">
                    <h3 style={{fontSize: '32px'}}>
                        Sign in
                    </h3>
                    <span style={{fontSize: '12px', color: '#3B405B', opacity: 0.7}}>Log in to your account by your electronic signature</span>
                </div>
                <div style={{marginTop: '35px'}} className="esign-btn-wrapper">
                    <a style={{boxShadow: '0 0 10px #4666EB',backgroundColor: '#4666EB', borderRadius: '10px', display: 'flex', color: 'white', justifyContent: 'space-between', alignItems: 'center'}}
                       className={'esign-btn w-100 p-4'} href="https://www.google.az/?gws_rd=ssl">
                        <svg width="119" height="41" viewBox="0 0 119 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.3212 20.6459H53.2575L61.3483 5.81231H63.5148L68.5823 15.1141L73.662 5.81231H75.8285L81.8752 16.9019L90.5291 9.46565H82.0344V5.74754H96.1107V9.4786L87.4446 16.9148H100.786L107.923 3.83019L119 24.1179L116.968 27.836H38.6303C36.2802 32.1025 33.9627 36.3647 31.6778 40.6226H0V0.15094H45.6073L43.5754 3.88201H5.2878V16.6687H15.08V24.1179H5.2878V36.9045H29.646C31.9635 32.638 34.285 28.3758 36.6107 24.1179H105.499L107.947 19.6613L110.395 24.1179H114.667L107.959 11.8364L103.161 20.6459H79.9045L74.7514 11.3312L69.6717 20.6329H67.5051L62.4254 11.3312L57.3212 20.6977V20.6459ZM21.7387 15.6711V25.1154L29.4746 20.3997L21.7387 15.6841V15.6711ZM47.6514 3.88201H51.1644V0.15094H49.6833L47.6514 3.88201V3.88201ZM47.6514 5.74754V20.6459H51.1644V5.74754H47.6514Z" fill="white"/>
                        </svg>
                        <svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0)">
                                <path d="M34.599 17.3825C34.5986 17.3821 34.5983 17.3816 34.5978 17.3812L27.4539 10.0035C26.9188 9.45082 26.0531 9.45288 25.5204 10.0083C24.9877 10.5637 24.9898 11.462 25.525 12.0148L30.3213 16.968H1.36719C0.61209 16.968 0 17.6032 0 18.3868C0 19.1704 0.61209 19.8056 1.36719 19.8056H30.3213L25.525 24.7588C24.9899 25.3116 24.9878 26.2099 25.5205 26.7653C26.0532 27.3208 26.9189 27.3227 27.454 26.7701L34.5978 19.3924C34.5983 19.392 34.5986 19.3915 34.5991 19.3911C35.1345 18.8365 35.1328 17.9353 34.599 17.3825Z" fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="35" height="36.3208" fill="white" transform="translate(0 0.22641)"/>
                                </clipPath>
                            </defs>
                        </svg>

                    </a>
                </div>
            </div>
        );
    }
}

export default ESignLogin;