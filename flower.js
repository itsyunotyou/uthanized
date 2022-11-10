class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        petals: [0, 1, 2, 3, 4, 5, 6, 7],
        love: false,
      }
    }
    
    loveOrNot = () => {
      const length = this.state.petals.length;
      const newState = (length % 2 === 0) ? true : false;
  
      return this.setState({
        love: newState,
      });
    }
  
    handleClick = (e) => {
      e.preventDefault();
  
      this.setState({
        petals: this.state.petals.filter((id) => {
          return id !== parseInt(e.target.parentNode.id);
        }),
      });
      this.loveOrNot();
    }
  
    render() {
      return (
        <div className="App">
          <div className="heading">
            {
              this.state.petals.length === 0 ? 'Loves me!' : (this.state.love ? 'Loves me not...' : 'Loves me...')
            }
          </div>
          <svg width="244px" height="302px" viewBox="0 0 244 302" version="1.1" url="back/grass.jpg">
              <defs>
                  // stem
                  <path d="M130.987847,122 C133.659505,157.293805 135.315501,187.391727 135.955835,212.293767 C136.596169,237.195806 130.273506,263.431217 116.987847,291" id="path-stem"></path>
                  <filter x="-63.1%" y="-5.9%" width="226.2%" height="114.2%" filterUnits="objectBoundingBox" id="filter-stem">
                      <feMorphology radius="5" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
                      <feOffset dx="0" dy="2" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
                      <feMorphology radius="5" operator="erode" in="SourceAlpha" result="shadowInner"></feMorphology>
                      <feOffset dx="0" dy="2" in="shadowInner" result="shadowInner"></feOffset>
                      <feComposite in="shadowOffsetOuter1" in2="shadowInner" operator="out" result="shadowOffsetOuter1"></feComposite>
                      <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0.819607843   0 0 0 0 0.764705882   0 0 0 0 0.764705882  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                  </filter>
  
                  // petal
                  <path d="M223.120444,246.724259 C216.601694,240.205509 198.89935,211.936759 205.4181,205.418009 C211.93685,198.899259 240.2056,216.603165 246.72435,223.120353 C253.2431,229.639103 253.2431,240.205509 246.72435,246.724259 C240.2056,253.241446 229.638412,253.241446 223.120444,246.724259 Z" id="path-petal"></path>
                  <filter x="-18.9%" y="-18.9%" width="137.8%" height="137.8%" filterUnits="objectBoundingBox" id="filter-petal">
                      <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                      <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0.482352941   0 0 0 0 0.384313725   0 0 0 0 0.384313725  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                  </filter>
  
                  // center
                  <circle id="path-sm-circle" cx="27" cy="27" r="27"></circle>
                  <filter x="-16.7%" y="-16.7%" width="133.3%" height="133.3%" filterUnits="objectBoundingBox" id="filter-sm-circle">
                      <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                      <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0.819169855   0 0 0 0 0.758145838   0 0 0 0 0.758145838  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                  </filter>
                  <circle id="path-lg-circle" cx="27" cy="27" r="18"></circle>
                  <filter x="-25.0%" y="-25.0%" width="150.0%" height="150.0%" filterUnits="objectBoundingBox" id="filter-lg-circle">
                      <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                      <feGaussianBlur stdDeviation="3" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                      <feColorMatrix values="0 0 0 0 0.819169855   0 0 0 0 0.758145838   0 0 0 0 0.758145838  0 0 0 0.5 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                  </filter>
  
              </defs>
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="Artboard" transform="translate(-78.000000, -78.000000)">
                      <g id="Background" transform="translate(78.000000, 78.000000)">
                          <circle id="Mask" fill="#F0C4C4" cx="122" cy="122" r="122"></circle>
                          <g id="Path-stem" stroke-linecap="round" transform="translate(126.493923, 206.500000) scale(-1, 1) translate(-126.493923, -206.500000) ">
                              <use fill="black" fill-opacity="1" filter="url(#filter-stem)" xlinkHref="#path-stem"></use>
                              <use stroke="#E4E8E4" stroke-width="10" xlinkHref="#path-stem"></use>
                          </g>
                      </g>
                      <g id="Petal" transform="translate(0,0)" fill="#FFFFFF" fill-rule="nonzero">
                        {
                          this.state.petals.map((i) => {
                            const rotate = ( i > 3 ? `rotate(${(90*i)+45} 200 200)` : `rotate(${90*i} 200 200)`);
                            return <g id={i} transform={rotate} onClick={this.handleClick} >
                              <use fill="black" fill-opacity="1" filter="url(#filter-petal)" xlinkHref="#path-petal"></use>
                              <use fill="#FFFFFF" xlinkHref="#path-petal" className="petal"></use>
                            </g>
                          })
                        }
                      </g>
                      <g id="Center" transform="translate(173.000000, 173.000000)">
                        <g id="Oval">
                            <use fill="black" fill-opacity="1" filter="url(#filter-sm-circle)" xlinkHref="#path-sm-circle"></use>
                            <use fill="#F9E589" fill-rule="evenodd" xlinkHref="#path-sm-circle"></use>
                        </g>
                        <g id="Oval">
                            <use fill="black" fill-opacity="1" filter="url(#filter-lg-circle)" xlinkHref="#path-lg-circle"></use>
                            <use fill="#F6C261" fill-rule="evenodd" xlinkHref="#path-lg-circle"></use>
                        </g>
                      </g>
                  </g>
              </g>
          </svg>
         </div>
        );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));