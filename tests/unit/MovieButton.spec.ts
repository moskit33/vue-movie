import { mount } from '@vue/test-utils'
import MovieButton from '@/components/MovieButton.vue'

describe('MovieButton', () => {
    it('renders the button with default props', () => {
        const wrapper = mount(MovieButton)

        expect(wrapper.classes('button')).toBe(true)
        expect(wrapper.classes('button--active')).toBe(false)
        expect(wrapper.classes('button--search')).toBe(false)
        expect(wrapper.text()).toBe('')
    })

    it('renders the button with isSearch prop', () => {
        const wrapper = mount(MovieButton, {
            props: {
                isSearch: true,
                isActive: false
            }
        })

        expect(wrapper.classes('button')).toBeTruthy()
        expect(wrapper.classes('button--active')).toBeTruthy()
        expect(wrapper.classes('button--search')).toBeTruthy()
    })

    it('renders the button with isActive prop', () => {
        const wrapper = mount(MovieButton, {
            props: {
                isActive: true,
                isSearch: false
            }
        })

        expect(wrapper.classes('button')).toBe(true)
        expect(wrapper.classes('button--active')).toBe(true)
        expect(wrapper.classes('button--search')).toBe(false)
        expect(wrapper.text()).toBe('')
    })

    it('renders the button with both isSearch and isActive props', () => {
        const wrapper = mount(MovieButton, {
            props: {
                isSearch: true,
                isActive: true
            }
        })

        expect(wrapper.classes('button')).toBe(true)
        expect(wrapper.classes('button--active')).toBe(true)
        expect(wrapper.classes('button--search')).toBe(true)
        expect(wrapper.text()).toBe('')
    })

    it('renders the button with slot content', () => {
        const wrapper = mount(MovieButton, {
            slots: {
                default: 'Test Button'
            }
        })

        expect(wrapper.classes('button')).toBe(true)
        expect(wrapper.classes('button--active')).toBe(false)
        expect(wrapper.classes('button--search')).toBe(false)
        expect(wrapper.text()).toBe('Test Button')
    })

    it('emits a click event when button is clicked', async () => {
        const wrapper = mount(MovieButton)

        await wrapper.trigger('click')

        expect(wrapper.emitted('click')).toBeTruthy()
    })
})