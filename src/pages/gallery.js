
import React from 'react';
import AfterSearchNavBar from '../components/AfterSearchNavBar/afterSearchNavBar';
import TabNavBar from '../components/TabNavBar/tabNavBar';
import GroupCard from './../components/GroupCard/groupCard';

class Photos extends React.Component {

    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {
            page:1,
            images:[]
        }
    }


    componentDidMount() {

        const page = this.state.page;
        if (page === 1) {
            const url = "https://api.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key=380c4d86f42228f2494cc9dceb357f94&group_id=2246777%40N23&format=json&nojsoncallback=1";

            fetch(url).
                then(res => res.json()).
                then(res => {
                    console.log(res.photos.photo);                        
            });
        }

        window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll() {

        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

            const page = this.state.page;
            const url = "https://api.flickr.com/services/rest/?method=flickr.groups.search&api_key=380c4d86f42228f2494cc9dceb357f94&text=food&per_page=10&page=" + page + "&format=json&nojsoncallback=1";

            if (page > 1) {

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
        return (
            <>
                <AfterSearchNavBar />
                <TabNavBar />
                <div className="container" >
                    <h3 className="subtitle">Flickr Groups</h3>

                    <div className="columns is-multiline" >
                        <GroupCard
                            
                        />
                    </div>

                </div>
            </>
        )
    }
}

export default Photos;
