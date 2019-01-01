import React from 'react';
import * as Api from './api';

import './App.scss';

export default class App extends React.PureComponent {
  state = {
    stories: [],
  }

  async componentDidMount() {
    // Fetch IDs of top stories
    const ids = await Api.fetchTopStories();
    // fetch details of stories in parallel
    const stories = await Promise.all(
      ids.slice(0, 10) // Cut into 10
      .map(id => Api.fetchStory(id))
    )
    this.setState({ stories })
  }

  render() {
    return (
      <div className="App">
        <ul className='story-list'>
        {this.state.stories.map((story, index) => (
          <li key={story.id} className='story-list__item'>
            <a className='story' href={story.url} target='_blank' rel='noopener noreferrer'>
              <span className='story__rank'>{index + 1}</span>
              <span className='story__title'>{story.title}</span>
            </a>
          </li>
        ))}
        </ul>
      </div>
    );
  }
}
