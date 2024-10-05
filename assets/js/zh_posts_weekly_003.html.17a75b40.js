"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3160],{6262:(e,i)=>{i.A=(e,i)=>{const t=e.__vccOpts||e;for(const[e,p]of i)t[e]=p;return t}},5214:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>n,data:()=>r});var p=t(641);const a={},n=(0,t(6262).A)(a,[["render",function(e,i){return(0,p.uX)(),(0,p.CE)("div",null,i[0]||(i[0]=[(0,p.Fv)('<h1 id="sara-高效微调-diffusion-模型-fish-speech-更新多语种语音生成-ifadapter-提升图像特征控制【ai-周报】" tabindex="-1"><a class="header-anchor" href="#sara-高效微调-diffusion-模型-fish-speech-更新多语种语音生成-ifadapter-提升图像特征控制【ai-周报】"><span><strong>SaRA 高效微调 Diffusion 模型|Fish-Speech 更新多语种语音生成|IFAdapter 提升图像特征控制【AI 周报】</strong></span></a></h1><h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_jpg/NM6DecUSXYsGhqP9NJy88No01ZhhQgNN0Kyx6ZYST4ZKicnDJXLVEnvKfDRicYzhc1hJ7UW0tibP5X0VZG02voBvQ/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span><strong>概要</strong></span></a></h2><p>本周 AI 周报聚焦三大创新工具：SaRA 通过稀疏适配技术高效微调扩散模型，支持个性化风格生成；Fish-Speech 在 v1.4 更新中优化了多语种语音生成能力；IFAdapter 则通过实例特征控制增强图像生成的细节表现。其余详见正文。</p><h2 id="目录" tabindex="-1"><a class="header-anchor" href="#目录"><span><strong>目录</strong></span></a></h2><ol><li>DiffusionPen：控制手写风格的扩散模型生成</li><li>Fish-Speech：多语种语音合成系统</li><li>Sliders：扩散模型的精细控制工具</li><li>IFAdapter：图像生成中的实例特征控制</li><li>TextBoost：文本到图像的个性化微调</li><li>SaRA：高效的扩散模型微调工具</li><li>MagicStyle：基于参考图像的人像风格化</li></ol><h2 id="diffusionpen-控制手写风格的-diffusion-模型生成方法" tabindex="-1"><a class="header-anchor" href="#diffusionpen-控制手写风格的-diffusion-模型生成方法"><span><strong>DiffusionPen：控制手写风格的 Diffusion 模型生成方法</strong></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNezZCAVRCNmS4AEReiaKw9fmU3Srzj90GO4SXd2uFbJwzQa7oDOb0dMw/640?wx_fmt=png&amp;from=appmsg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>DiffusionPen 的训练 Pipeline 图</p><p><strong>概要</strong>: DiffusionPen[1][2] 提出了一种基于 Latent Diffusion Models 的方法，能够通过文本提示生成具有特定风格的手写文本。该研究通过结合度量学习与分类器，有效捕捉文本和手写风格的多样性，并利用多风格混合和噪声嵌入等策略，增强生成数据的鲁棒性和多样性。这一方法在提升手写文本生成和识别性能上有显著效果。</p><p><strong>标签</strong>: #Diffusion 模型 #手写文本生成 #风格控制 #机器学习</p><h2 id="fish-speech-多语种语音合成解决方案" tabindex="-1"><a class="header-anchor" href="#fish-speech-多语种语音合成解决方案"><span><strong>Fish-Speech：多语种语音合成解决方案</strong></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNC4VIRWqrlUScM3zWH6onH3Ol3S2qN0Lwwc5uY264GbpQvKMCxF9VVg/640?wx_fmt=png&amp;from=appmsg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Fish-Speech 的训练 Pipeline 图</p><p><strong>概要</strong>: Fish-Speech[3] 是一个全新的开源语音合成系统，支持多语种文本到语音（TTS）生成，结合了多种先进模型，如 VITS2 和 GPT-VITS。它提供了灵活的语音克隆和高度自然的语音合成能力，广泛应用于语言学习、虚拟助手等场景。Fish-Speech 的目标是通过提供多样化、开源的解决方案来推动 TTS 技术的发展。</p><p><strong>标签</strong>: #语音合成 #TTS #开源项目 #语音克隆</p><h2 id="sliders-diffusion-模型的精细控制工具" tabindex="-1"><a class="header-anchor" href="#sliders-diffusion-模型的精细控制工具"><span><strong>Sliders：Diffusion 模型的精细控制工具</strong></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNImuNnf2s4XiacibjuakvQDibwraywIhYO5SaicEAHHtsmhM76DoloUMDCg/640?wx_fmt=png&amp;from=appmsg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Slider 的 Teaser 图</p><p><strong>概要</strong>: Sliders[4][5] 使用 LoRA Adapter 为 Diffusion 模型提供了更精细的概念控制能力。通过 Sliders，用户可以调整生成过程中图像属性（如光照、纹理）的强度。这种方法允许用户更灵活地操控图像生成，应用于艺术创作和图像编辑领域，显著提升生成图像的质量和多样性。</p><p><strong>标签</strong>: #LoRAAdapter #Diffusion 模型 #图像控制 #概念生成</p><h2 id="ifadapter-面向文本到图像生成的实例特征控制" tabindex="-1"><a class="header-anchor" href="#ifadapter-面向文本到图像生成的实例特征控制"><span><strong>IFAdapter：面向文本到图像生成的实例特征控制</strong></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_jpg/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNmTTl9B3yYGDFupjtwDEDicyD8ic8gXGibfaMrY5fKkUeVyESkMytSjgtw/640?wx_fmt=jpeg&amp;from=appmsg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>IFAdapter 的 Pipeline 图</p><p><strong>概要</strong>: IFAdapter[6][7] 提出了一种创新的插件模块，用于 Diffusion 模型的实例特征生成和控制。该方法通过使用外观令牌和实例语义地图，确保生成的图像在空间位置和特征准确性上都具有高度一致性。IFAdapter 可以无缝集成到现有的社区 Diffusion 模型中，增强复杂图像生成任务的可控性，特别适用于多实例布局生成。</p><p><strong>标签</strong>: #Diffusion 模型 #图像生成 #特征控制 #LoRAAdapter</p><h2 id="textboost-针对文本到图像模型的一次性个性化方法" tabindex="-1"><a class="header-anchor" href="#textboost-针对文本到图像模型的一次性个性化方法"><span><strong>TextBoost：针对文本到图像模型的一次性个性化方法</strong></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNN7CbcEQbWZvsuEG2vCPdH3EwA1ZbqevIcIKqoSFSHVEI6YoJa1jvV5A/640?wx_fmt=png&amp;from=appmsg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>TextBoost 的 Pipeline 图</p><p><strong>概要</strong>: TextBoost[8][9] 通过对文本编码器的选择性微调，实现了文本到图像生成的个性化控制，特别针对一次性个性化场景。该方法采用增强令牌、知识保留损失以及 SNR 加权采样来避免过拟合，并提高生成图像的多样性与质量。TextBoost 可以在仅使用单一参考图像的情况下生成高质量个性化图像，显著减少存储和计算资源需求。</p><p><strong>标签</strong>: #文生图 #个性化生成 #文本编码器 #增强 Token</p><h2 id="sara-高效-diffusion-模型微调工具" tabindex="-1"><a class="header-anchor" href="#sara-高效-diffusion-模型微调工具"><span><strong>SaRA：高效 Diffusion 模型微调工具</strong></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNpQ0fJNfAwKmEXzf4plf7TcIkPcS38ZSvc6XT1QcITB6O4ibNBcr0nBg/640?wx_fmt=png&amp;from=appmsg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>SaRA 的 Pipeline 图</p><p><strong>概要</strong>: SaRA（Sparse Low-Rank Adaptation）[10][11] 是一种高效的 Diffusion 模型微调工具，允许用户通过简单修改代码实现预训练模型的微调。它通过稀疏低秩适配技术，在不牺牲生成效果的前提下大幅减少训练参数，适用于多个数据集的个性化风格生成任务，如 BarbieCore、CyberPunk 等。该工具在优化模型大小和性能的同时，支持快速微调与保存训练参数。</p><p><strong>标签</strong>: #Diffusion 模型 #模型微调 #稀疏适配 #风格生成</p><h2 id="magicstyle-基于参考图像的人像风格化" tabindex="-1"><a class="header-anchor" href="#magicstyle-基于参考图像的人像风格化"><span><strong>MagicStyle：基于参考图像的人像风格化</strong></span></a></h2><figure><img src="https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNj7gGBGmwz2Lr0I7mZnWqAFQzssWoHqE8hzjrnqRALyREa7PCDRNLmQ/640?wx_fmt=png&amp;from=appmsg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>MagicStyle 的 Pipeline 图</p><p><strong>概要</strong>: MagicStyle[12]  是一种针对人像的 Diffusion 模型风格化方法，结合内容和风格图像的特征，通过自注意力机制实现图像的纹理与颜色融合。该方法分为两个阶段：CSDI 阶段处理反向去噪以提取图像特征，FFF 阶段通过特征融合将风格信息整合到内容图像中，从而实现高度细致的风格转换，适用于人像的复杂细节处理。</p><p><strong>标签</strong>: #Diffusion 模型 #图像风格化 #人像生成 #特征融合 #风格迁移</p><h3 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span><strong>参考链接</strong></span></a></h3><ol><li><p><a href="https://github.com/koninik/DiffusionPen" target="_blank" rel="noopener noreferrer">DiffusionPen GitHub 仓库</a></p></li><li><p><a href="https://arxiv.org/pdf/2409.06065" target="_blank" rel="noopener noreferrer">DiffusionPen 论文</a></p></li><li><p><a href="https://github.com/fishaudio/fish-speech" target="_blank" rel="noopener noreferrer">Fish-Speech GitHub 仓库</a></p></li><li><p><a href="https://github.com/rohitgandikota/sliders" target="_blank" rel="noopener noreferrer">Sliders GitHub 仓库</a></p></li><li><p><a href="https://arxiv.org/pdf/2311.12092" target="_blank" rel="noopener noreferrer">Sliders 论文</a></p></li><li><p><a href="https://github.com/WUyinwei-hah/IFAdapter" target="_blank" rel="noopener noreferrer">IFAdapter GitHub 仓库</a></p></li><li><p><a href="https://arxiv.org/pdf/2409.08240" target="_blank" rel="noopener noreferrer">IFAdapter 论文</a></p></li><li><p><a href="https://github.com/nahyeonkaty/textboost" target="_blank" rel="noopener noreferrer">TextBoost GitHub 仓库</a></p></li><li><p><a href="https://textboost.github.io/assets/draft_20240913.pdf" target="_blank" rel="noopener noreferrer">TextBoost 论文</a></p></li><li><p><a href="https://github.com/sjtuplayer/SaRA" target="_blank" rel="noopener noreferrer">SaRA GitHub 仓库</a></p></li><li><p><a href="https://export.arxiv.org/pdf/2409.06633" target="_blank" rel="noopener noreferrer">SaRA 论文</a></p></li><li><p><a href="https://arxiv.org/pdf/2409.08156" target="_blank" rel="noopener noreferrer">MagicStyle 论文</a></p></li></ol>',44)]))}]]),r=JSON.parse('{"path":"/zh/posts/weekly/003.html","title":"SaRA 高效微调 Diffusion 模型|Fish-Speech 更新多语种语音生成|IFAdapter 提升图像特征控制【AI 周报】","lang":"zh-CN","frontmatter":{"description":"SaRA 高效微调 Diffusion 模型|Fish-Speech 更新多语种语音生成|IFAdapter 提升图像特征控制【AI 周报】 概要 本周 AI 周报聚焦三大创新工具：SaRA 通过稀疏适配技术高效微调扩散模型，支持个性化风格生成；Fish-Speech 在 v1.4 更新中优化了多语种语音生成能力；IFAdapter 则通过实例特征控制...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://neverbiasu.github.io/zh/posts/weekly/003.html"}],["meta",{"property":"og:site_name","content":"Nlog"}],["meta",{"property":"og:title","content":"SaRA 高效微调 Diffusion 模型|Fish-Speech 更新多语种语音生成|IFAdapter 提升图像特征控制【AI 周报】"}],["meta",{"property":"og:description","content":"SaRA 高效微调 Diffusion 模型|Fish-Speech 更新多语种语音生成|IFAdapter 提升图像特征控制【AI 周报】 概要 本周 AI 周报聚焦三大创新工具：SaRA 通过稀疏适配技术高效微调扩散模型，支持个性化风格生成；Fish-Speech 在 v1.4 更新中优化了多语种语音生成能力；IFAdapter 则通过实例特征控制..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mmbiz.qpic.cn/sz_mmbiz_jpg/NM6DecUSXYsGhqP9NJy88No01ZhhQgNN0Kyx6ZYST4ZKicnDJXLVEnvKfDRicYzhc1hJ7UW0tibP5X0VZG02voBvQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SaRA 高效微调 Diffusion 模型|Fish-Speech 更新多语种语音生成|IFAdapter 提升图像特征控制【AI 周报】\\",\\"image\\":[\\"https://mmbiz.qpic.cn/sz_mmbiz_jpg/NM6DecUSXYsGhqP9NJy88No01ZhhQgNN0Kyx6ZYST4ZKicnDJXLVEnvKfDRicYzhc1hJ7UW0tibP5X0VZG02voBvQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNezZCAVRCNmS4AEReiaKw9fmU3Srzj90GO4SXd2uFbJwzQa7oDOb0dMw/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNC4VIRWqrlUScM3zWH6onH3Ol3S2qN0Lwwc5uY264GbpQvKMCxF9VVg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNImuNnf2s4XiacibjuakvQDibwraywIhYO5SaicEAHHtsmhM76DoloUMDCg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"https://mmbiz.qpic.cn/sz_mmbiz_jpg/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNmTTl9B3yYGDFupjtwDEDicyD8ic8gXGibfaMrY5fKkUeVyESkMytSjgtw/640?wx_fmt=jpeg&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNN7CbcEQbWZvsuEG2vCPdH3EwA1ZbqevIcIKqoSFSHVEI6YoJa1jvV5A/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNpQ0fJNfAwKmEXzf4plf7TcIkPcS38ZSvc6XT1QcITB6O4ibNBcr0nBg/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\",\\"https://mmbiz.qpic.cn/sz_mmbiz_png/NM6DecUSXYsGhqP9NJy88No01ZhhQgNNj7gGBGmwz2Lr0I7mZnWqAFQzssWoHqE8hzjrnqRALyREa7PCDRNLmQ/640?wx_fmt=png&from=appmsg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"neverbiasu\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"","slug":"","link":"#","children":[]},{"level":2,"title":"概要","slug":"概要","link":"#概要","children":[]},{"level":2,"title":"目录","slug":"目录","link":"#目录","children":[]},{"level":2,"title":"DiffusionPen：控制手写风格的 Diffusion 模型生成方法","slug":"diffusionpen-控制手写风格的-diffusion-模型生成方法","link":"#diffusionpen-控制手写风格的-diffusion-模型生成方法","children":[]},{"level":2,"title":"Fish-Speech：多语种语音合成解决方案","slug":"fish-speech-多语种语音合成解决方案","link":"#fish-speech-多语种语音合成解决方案","children":[]},{"level":2,"title":"Sliders：Diffusion 模型的精细控制工具","slug":"sliders-diffusion-模型的精细控制工具","link":"#sliders-diffusion-模型的精细控制工具","children":[]},{"level":2,"title":"IFAdapter：面向文本到图像生成的实例特征控制","slug":"ifadapter-面向文本到图像生成的实例特征控制","link":"#ifadapter-面向文本到图像生成的实例特征控制","children":[]},{"level":2,"title":"TextBoost：针对文本到图像模型的一次性个性化方法","slug":"textboost-针对文本到图像模型的一次性个性化方法","link":"#textboost-针对文本到图像模型的一次性个性化方法","children":[]},{"level":2,"title":"SaRA：高效 Diffusion 模型微调工具","slug":"sara-高效-diffusion-模型微调工具","link":"#sara-高效-diffusion-模型微调工具","children":[]},{"level":2,"title":"MagicStyle：基于参考图像的人像风格化","slug":"magicstyle-基于参考图像的人像风格化","link":"#magicstyle-基于参考图像的人像风格化","children":[{"level":3,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}]}],"readingTime":{"minutes":4.98,"words":1494},"filePathRelative":"zh/posts/weekly/003.md","excerpt":"\\n<h2></h2>\\n<figure><img src=\\"https://mmbiz.qpic.cn/sz_mmbiz_jpg/NM6DecUSXYsGhqP9NJy88No01ZhhQgNN0Kyx6ZYST4ZKicnDJXLVEnvKfDRicYzhc1hJ7UW0tibP5X0VZG02voBvQ/640?wx_fmt=jpeg&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>\\n<h2><strong>概要</strong></h2>","autoDesc":true}')}}]);