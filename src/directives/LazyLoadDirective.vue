<script lang="ts">
import { NOT_FOUND_IMAGE } from '../helpers'

export default {
    install (Vue: any) {
        const lazyload = {
            mounted: (el: any) => {
                function loadImage() {
                    const imageElement: any = Array.from(el.children).find((el: any) => el.nodeName === "IMG");
                    if (imageElement) {
                        imageElement.addEventListener("load", () => {
                            setTimeout(() => el.classList.add("loaded"), 100);
                        });
                        imageElement.addEventListener("error", () => imageElement.src = NOT_FOUND_IMAGE);
                        imageElement.src = imageElement.dataset.url;
                    }
                }
                function handleIntersect(entries: any, observer: any) {
                    entries.forEach((entry: any) => {
                        if (entry.isIntersecting) {
                            loadImage();
                            observer.unobserve(el);
                        }
                    });
                }
                function createObserver() {
                    const options: any = {
                        root: null,
                        threshold: "0"
                    };
                    const observer = new IntersectionObserver(handleIntersect, options);
                    observer.observe(el);
                }
                if (window["IntersectionObserver"]) {
                    createObserver();
                } else {
                    loadImage();
                }
            }
        }
        Vue.directive('lazyload', lazyload)
    },  
};
</script>