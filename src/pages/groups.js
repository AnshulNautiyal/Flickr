
import React,{Suspense} from 'react';
import { Link } from 'gatsby';
import AfterSearchNavBar from './../components/AfterSearchNavBar/afterSearchNavBar';
import TabNavBar from './../components/TabNavBar/tabNavBar';
// import GroupCard from './../components/GroupCard/groupCard';
const GroupCardLazyLoad = React.lazy(() => import('./../components/GroupCard/groupCard'));

class Groups extends React.Component {
  constructor(){
    super();
    this.state = {
      page:1,
      group : []
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {

    const page = this.state.page;
    if(page === 1){
      const url = "https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=380c4d86f42228f2494cc9dceb357f94&text=food&per_page=10&page=" + page + "&format=json&nojsoncallback=1";

      
      fetch(url).
        then(res => res.json()).
        then(res => {

          this.setState(prevState => {
            if (this.state.group.length > 0) {
              return {
                page: prevState.page + 1,
                group: [...prevState.group, ...res.groups.group]
              }
            }
            
            return {
              page: prevState.page + 1,
              group: [...res.groups.group]
            }
          });
        });
    }

    window.addEventListener('scroll', this.handleScroll);

  }

  handleScroll(){

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      
      const page= this.state.page;
      const url = "https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=380c4d86f42228f2494cc9dceb357f94&text=food&per_page=10&page=" + page + "&format=json&nojsoncallback=1";

      if(page > 1){

        fetch(url).
          then(res => res.json()).
          then(res => {

            this.setState(prevState => {
              if (this.state.group.length > 0) {
                return {
                  page: prevState.page + 1,
                  group: [...prevState.group, ...res.groups.group]
                }
              }
              return {
                page: prevState.page + 1,
                group: [...prevState.group, ...res.groups.group,]
              }
            });

          });
      }
     
    }
  }// End of handleScroll

  render(){
    
    const col = this.state.group.map((item,index) => {
      
        return (
          <div className="column is-4" key={index} >
          <Suspense fallback={<div style={{ height: 400, backgroundColor: 'red' }}>Loading...</div>}>     
          <Link to="/gallery"> 
            <GroupCardLazyLoad
                name={item.name}
                chat={item.topic_count}
                member={item.members}
                photo={item.pool_count}
                onScroll={this.handleScroll}
              />
          </Link>
          </Suspense>
          
        </div>
        )
    })
    return (
      
        <>
          <AfterSearchNavBar />
          <TabNavBar />
          
            <div className="container" >
              <h3 className="subtitle">Flickr Groups</h3>
              
              <div className="columns is-multiline" >
                {col}
              </div>
              
            </div>
          
        </>
    )
  }
}

export default Groups
