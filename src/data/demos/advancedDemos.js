// 高级动画演示数据
export const advancedDemos = {
  高级动画示例: `
    <div style="display: flex; align-items: center; justify-content: center; height: 400px; background: #f5f5f5; border-radius: 8px;">
      <div id="advancedDemo" style="width: 200px; height: 200px; position: relative;"></div>
      <script>
        const container = document.getElementById('advancedDemo');
        for (let i = 0; i < 10; i++) {
          const circle = document.createElement('div');
          circle.style.position = 'absolute';
          circle.style.width = '20px';
          circle.style.height = '20px';
          circle.style.borderRadius = '50%';
          circle.style.backgroundColor = '#3498db';
          circle.style.left = '50%';
          circle.style.top = '50%';
          circle.style.transform = 'translate(-50%, -50%)';
          circle.style.animation = 'bounce 1s infinite ease-in-out';
          container.appendChild(circle);
        }
        
        const style = document.createElement('style');
        style.textContent = "@keyframes bounce { 0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; } 50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.5; } }";
        document.head.appendChild(style);
      </script>
    </div>
  `,
};
