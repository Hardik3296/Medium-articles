import "./styles.css";

const SectionSecond = ({ animateSecondSection }) => {
   return (
      <div className={`container-second ${animateSecondSection ? "animate" : ""}`}>
         <h2>Section - Second</h2>
         <p className="text">Cras et nisl mollis, tincidunt sem ac, ornare risus. Morbi laoreet nulla vel mauris viverra finibus. In aliquam augue at libero pellentesque, non hendrerit lectus varius. Praesent ut felis consectetur, ultricies diam nec, tempor dui. Quisque bibendum dui in tempus accumsan. Phasellus quis dui dictum, laoreet lacus quis, dictum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas at justo mi. Curabitur lobortis est eros, vitae ornare turpis blandit eu. Nam tincidunt enim in nunc placerat, eu molestie turpis pharetra. Phasellus ac interdum elit, eu molestie turpis. Vivamus venenatis felis vel augue tincidunt volutpat. Vestibulum accumsan pellentesque leo. Proin tincidunt sapien tortor, tempor tincidunt ex viverra a. Aenean ac orci velit. Nulla gravida aliquam est, a fermentum mauris mattis at.

         Vestibulum non libero ac justo venenatis hendrerit. Nunc lorem ex, dignissim vel ligula eu, facilisis dignissim nibh. Sed gravida hendrerit euismod. Integer ullamcorper rhoncus lectus et commodo. Sed non euismod lectus. Nullam eu lacinia justo, eu posuere sapien. Nulla non metus congue, porta velit vel, bibendum sem. Duis non pretium turpis. Mauris molestie lectus ac quam vulputate, at porta justo commodo. Cras tortor turpis, pretium vitae justo sit amet, rutrum molestie diam. Ut consectetur lectus in est tincidunt, nec facilisis libero pellentesque. Suspendisse potenti. Phasellus eu ex ac libero ultricies egestas. Cras ut tristique neque, non luctus nibh. Nam eget rhoncus nisi.

         Ut a elit bibendum massa laoreet iaculis. Cras eget maximus odio. Nam at sapien nec diam viverra venenatis. Duis id sapien aliquet, maximus nunc malesuada, mollis leo. Pellentesque mattis ut diam quis vestibulum. Donec pellentesque, lectus vitae cursus sollicitudin, mauris nunc malesuada arcu, eu congue velit nisi nec elit. Quisque quis lorem urna. Curabitur a lectus accumsan, aliquam elit a, molestie erat. Morbi eu fermentum est, ac tincidunt diam.

         Integer rhoncus, est in blandit elementum, lectus diam sodales dui, ac luctus nisl dui sed eros. Vestibulum semper egestas nunc, at faucibus eros maximus in. Nam quam nulla, dictum et lobortis pharetra, mollis quis est. Nam gravida ultrices dui dapibus imperdiet. Donec sit amet ligula velit. Maecenas pretium posuere elit, eget porta nulla mollis eget. Donec semper eros porta tempus commodo. Etiam sodales velit eu semper elementum.


Quisque malesuada nunc at dolor efficitur aliquet. Praesent in urna commodo sapien malesuada tempus vel nec risus. In posuere mattis tellus, et malesuada diam faucibus convallis. Sed nisl dolor, ullamcorper eu varius eget, suscipit vel nunc. Praesent velit urna, eleifend a metus tristique, iaculis cursus ante. Nullam risus dui, volutpat sed aliquet nec, cursus sed ex. Donec suscipit magna quis eleifend sodales.</p>
      </div>
   );
}

export default SectionSecond;