import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
import router from '@/router'
import store from '@/store'

describe('It works', () => {
  it('should render the events', () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  describe('Page  title', () => {
    it('Is renderes with the correct text', () => {
      const wrapper = mount(EventList, {
        global: {
          plugins: [store, router]
        }
      })

      const title = wrapper.find('[data-testid=event-list-title]')

      expect(title.exists()).toBeTruthy()
      expect(title.text()).toContain('Events for Good')
    })
  })
})
