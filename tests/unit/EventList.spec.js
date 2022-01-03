import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
import { createStore } from '@/store'
import router from '@/router'
import { events as mockEvents } from '../../db.json'

function mountEventList(config = {}) {
  config.mountOptions = config.mountOptions || {}
  config.plugins = config.plugins || {}

  return mount(EventList, {
    global: {
      plugins: [createStore(config.plugins.store), router]
    },
    ...config.mountOptions
  })
}

let wrapper

describe('It works', () => {
  beforeEach(() => {
    wrapper = mountEventList()
  })

  it('should render the events', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Page  title', () => {
    it('Is renders with the correct text', () => {
      const title = wrapper.find('[data-testid=event-list-title]')

      expect(title.exists()).toBeTruthy()
      expect(title.text()).toContain('Events for Good')
    })
  })

  describe('Events', () => {
    it('should be rendered in a list with necessary information', () => {
      wrapper = mountEventList({
        plugins: {
          store: {
            state: () => ({
              events: mockEvents
            })
          }
        }
      })

      const events = wrapper.findAll('[data-testid=event]')

      expect(events).toHaveLength(mockEvents.length)

      events.forEach((event, i) => {
        const eventText = event.text()

        expect(eventText).toContain(mockEvents[i].title)
        expect(eventText).toContain(mockEvents[i].date)
      })
    })
  })
})
