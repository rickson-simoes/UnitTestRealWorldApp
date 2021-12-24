import { mount } from '@vue/test-utils'
import EventCard from '@/components/EventCard.vue'

describe('It works', () => {
  it('should render the event data successfuly', () => {
    const event = {
      id: '123',
      time: '12:24',
      date: '12/12/2011',
      title: 'titulo chamativo'
    }

    const wrapper = mount(EventCard, {
      props: { event }
    })

    const wrapperHTML = wrapper.html()

    expect(wrapperHTML).toContain(event.date)
    expect(wrapperHTML).toContain(event.time)
    expect(wrapperHTML).toContain(event.title)
  })
})
